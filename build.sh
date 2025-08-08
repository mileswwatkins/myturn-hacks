#! /usr/bin/env bash

DIRS=(
    public-header
    public-footer
    admin-header
    admin-footer
)

for dir in "${DIRS[@]}"; do
    cat "$dir/"*.ts | yarn esbuild --target=es2015 --bundle --outfile="dist/$dir.js"
done
