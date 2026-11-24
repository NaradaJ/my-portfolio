// Removes EXIF metadata (including GPS location) from photos before they're published.
// Runs in the deploy workflow; any photo it cleans is committed back to the repo.
import { readdir, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import sharp from 'sharp';

const dir = 'src/assets/photos';
const files = (await readdir(dir)).filter((f) => ['.jpg', '.jpeg', '.png', '.webp'].includes(extname(f).toLowerCase()));
let cleaned = 0;

for (const file of files) {
  const path = join(dir, file);
  const meta = await sharp(path).metadata();
  if (!meta.exif && !meta.xmp && !meta.iptc) continue;
  const ext = extname(file).toLowerCase();
  let img = sharp(path).rotate(); // apply orientation, then drop all metadata
  img = ext === '.png' ? img.png() : ext === '.webp' ? img.webp({ quality: 90 }) : img.jpeg({ quality: 90, mozjpeg: true });
  await writeFile(path, await img.toBuffer());
  console.log(`Stripped metadata: ${file}`);
  cleaned++;
}
console.log(cleaned ? `Cleaned ${cleaned} photo(s).` : 'All photos already clean.');
