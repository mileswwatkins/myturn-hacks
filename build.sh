#! /usr/bin/env bash

DIRS=(
    public-footer
    admin-footer
)

for dir in "${DIRS[@]}"; do
    cat "$dir/"*.ts | yarn esbuild --target=es2015 --bundle --outfile="dist/$dir.js"
done
