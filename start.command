#!/usr/bin/env bash
cd "$(dirname "$0")"
PORT=${1:-8000}
(sleep 1; (command -v xdg-open >/dev/null && xdg-open "http://localhost:$PORT") || (command -v open >/dev/null && open "http://localhost:$PORT")) >/dev/null 2>&1 &
if command -v node >/dev/null; then node server.js $PORT; elif command -v python3 >/dev/null; then python3 server.py $PORT; else python server.py $PORT; fi
