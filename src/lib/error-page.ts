export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Something went wrong</title>
    <style>
      :root { color-scheme: light dark; }
      body {
        margin: 0;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        background: #fafafa;
        color: #111;
      }
      @media (prefers-color-scheme: dark) {
        body { background: #0b0b0b; color: #f5f5f5; }
        .card { background: #161616; border-color: #262626; }
        .btn-secondary { background: #1f1f1f; color: #f5f5f5; border-color: #2a2a2a; }
      }
      .card {
        max-width: 28rem;
        padding: 2rem;
        border: 1px solid #e5e5e5;
        border-radius: 12px;
        background: #fff;
        text-align: center;
      }
      h1 { margin: 0 0 0.5rem; font-size: 1.25rem; }
      p { margin: 0 0 1.5rem; color: #666; font-size: 0.9rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      .btn {
        appearance: none;
        border: 1px solid transparent;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
      }
      .btn-primary { background: #111; color: #fff; }
      .btn-secondary { background: #fff; color: #111; border-color: #e5e5e5; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. Try refreshing or head back home.</p>
      <div class="actions">
        <button class="btn btn-primary" onclick="location.reload()">Refresh</button>
        <a class="btn btn-secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
