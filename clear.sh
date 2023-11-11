#!/bin/bash

# Delete directories and files if they exist
[ -d "dist" ] && rm -rf dist &
[ -d "node_modules" ] && rm -rf node_modules &
[ -f "pnpm-lock.yaml" ] && rm pnpm-lock.yaml &

# Run eslint and pnpm commands
eslint --cache --cache-location .eslintcache --fix &


# Wait for all operations to complete
wait