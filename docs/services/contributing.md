# Contributing integrations

This repo is a catalog. New entries are welcome and should be lightweight but accurate.

## Service not listed checklist
Use this checklist to add a missing service:
1. Confirm it supports one of the generic patterns in `docs/services/generic-integrations.md`
2. Determine the method: webhook, script, polling, email, or ci
3. Identify quirks (auth, signature verification, payload limits, timeouts, plan limits)
4. Add the official documentation link
5. Add the entry under the right category page in `docs/services/catalog/`

## Entry format
Use this exact format:
```
- Service Name — Possible: yes/no. Method: webhook/script/polling/email/ci. Quirks: short, specific note. Docs: https://...
```

## Contribution flow
1. Add or update the entry in the correct category page
2. If the service is new to the catalog, do not duplicate it in multiple categories
3. Keep quirks factual and concise; avoid marketing language
4. Open a pull request with a short summary and any verification notes
