# Zero-dependency static server:  python3 server.py [port]
import http.server, socketserver, sys, os
port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
os.chdir(os.path.dirname(os.path.abspath(__file__)))
class H(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache'); super().end_headers()
socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(('127.0.0.1', port), H) as s:
    print(f'SciOly Lab running at  http://localhost:{port}   (Ctrl+C to stop)'); s.serve_forever()
