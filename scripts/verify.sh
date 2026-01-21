#!/usr/bin/env sh
set -eu

# Simple repo verification for automated changes
[ -f README.md ]
[ -d docs/services/catalog ]

# Ensure catalog pages are non-empty
for f in docs/services/catalog/*.md; do
  [ -s "$f" ]
done

# Ensure index exists
[ -s docs/services/index.md ]

# Ensure generic integrations exists
[ -s docs/services/generic-integrations.md ]
