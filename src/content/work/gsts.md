---
title: GSTS — Government Service Ticketing System
ticket: NK-2026-001
kind: Case study
summary: Walk-in government requests become tracked tickets with enforced steps, peer review and an audit log that can’t be edited.
role: Solo developer · First-year BIT project, University of Moratuwa
year: 2026
stack: [C#, .NET 10, Windows Forms, MariaDB, ADO.NET]
repo: https://github.com/NaradaJ/Project_3
order: 1
---

## The problem

Sri Lankan government offices often handle walk-in requests, like ID renewals and certificates, on paper. Requests get lost, nobody clearly owns them, and there’s no reliable history when several officers are involved.

## What I built

A desktop app that turns every request into a ticket with an ID like `GST-2026-000003`, an owner, defined steps and a full history.

- **Enforced progress:** a ticket can’t move to the next stage while a compulsory step is open.
- **Peer review:** the next officer must approve or flag the previous officer’s work before editing.
- **Append-only log:** every action is timestamped, and database triggers block edits and deletes.
- **Live timer:** time since the ticket was created is always on screen.

## Key decisions

- **Three layers** (Forms → Services → Data). Only one class runs SQL.
- **The review rule is enforced twice**, in the UI and in every service method, so it holds even if a screen changes later.
- **Each change and its log entry share one transaction**, so either both are saved or neither is.
- **PBKDF2 password hashing** and parameterised SQL throughout.
- Every open design question is recorded with a decision and the reason for it.

## Result

All 11 functional requirements implemented and traced to code, with **88 automated checks passing**.
