@echo off
cd /d "%~dp0"
start "" http://localhost:8000
where node >nul 2>nul && (node server.js 8000) || (where py >nul 2>nul && (py server.py 8000) || (python server.py 8000))
