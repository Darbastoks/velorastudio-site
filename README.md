# Velora Studio website

Static website for velorastudio.lt.

## Local preview

```bash
python -m http.server 8787 --bind 127.0.0.1
```

Open: http://127.0.0.1:8787

## Render deploy

1. Push this folder to GitHub.
2. Render → New → Static Site.
3. Build command: leave empty.
4. Publish directory: `.`
5. Add custom domain: `velorastudio.lt` and `www.velorastudio.lt`.
6. Copy Render DNS values into Domenai.lt DNS.
