#!/bin/bash

BINARY="${TAILWIND_BINARY:=build/bin/tailwindcss-macos-arm64}"
COMMAND="$1"

if [[ $COMMAND == '' ]]; then
    printf "No command specified, use dev or build\n" >&2
    exit 1
fi


case "$COMMAND" in
    "dev") exec $BINARY -o assets/tailwind-output.css --watch
    ;;
    "build") exec $BINARY -o assets/tailwind-output.css --minify
    ;;
esac

