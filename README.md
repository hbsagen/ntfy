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

## How this repo is organized
- `docs/` main documentation
- `docs/services/` per-service integration guides
- `docs/assets/` screenshots and diagrams

## Contributing
This project is early. If you want to add a service integration guide:
1. Pick a target from the checklist in `docs/services/README.md`
2. Use the guide template in `docs/templates/guide-template.md`
3. Open a pull request with a short summary and any testing notes

## Roadmap
See `docs/roadmap.md` for what is planned and what needs help.
