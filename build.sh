#! /usr/bin/env bash

set -euo pipefail

DIRS=(
    public-footer
    admin-footer
)

for dir in "${DIRS[@]}"; do
    cat "$dir/"*.ts | yarn esbuild --sourcemap --minify --target=es2015 --bundle --outfile="dist/$dir.js"
done
