# ntfy service integrations guide

A practical, beginner-friendly guide to sending notifications to [ntfy](https://ntfy.sh/) from popular services and systems (CI/CD, monitoring, homelab, security, etc.).

## Goals
- Make it easy to push events into ntfy from popular services
- Catalog 100+ integrations with clear feasibility and quirks
- Provide generic patterns that work for any service
- Link to official docs where possible

## Getting started
- Start here: `docs/getting-started.md`
- Self-hosting: `docs/self-hosting.md`
- Service integrations: `docs/services/README.md`
- Full catalog: `docs/services/index.md`
- Generic patterns: `docs/services/generic-integrations.md`
- Contributing integrations: `docs/services/contributing.md`

## Automation policy (nightly issues)
This repo runs a nightly GitHub-issues workflow via n8n to keep reports and simple fixes current.

What it does nightly:
- Pulls open GitHub issues for this repo
- Writes a dated report to `docs/issue-triage/YYYY-MM-DD.md`
- Runs `scripts/autofix.js` to repair missing/broken catalog items and normalize links
- Runs `scripts/verify.sh` to validate basic repo structure
- If verification passes, commits directly to `main`

Notes:
- All automated changes are minimal and verification-gated
- Non-trivial fixes should still be reviewed by a human

## How this repo is organized
- `docs/` main documentation
- `docs/services/` per-service integration guides
- `docs/services/catalog/` category catalogs (100+ services)
- `docs/assets/` screenshots and diagrams
- `scripts/` automation helpers

## Contributing
This project is early. If you want to add a service integration guide:
1. Pick a target from the checklist in `docs/services/README.md`
2. Use the guide template in `docs/templates/guide-template.md`
3. Open a pull request with a short summary and any testing notes

## Roadmap
See `docs/roadmap.md` for what is planned and what needs help.
