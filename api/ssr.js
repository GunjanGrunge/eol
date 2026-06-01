import app from '../dist/server/server.js';

export default async function handler(req, res) {
  const protocol = req.headers['x-forwarded-proto'] ?? 'https';
  const host = req.headers['x-forwarded-host'] ?? req.headers['host'] ?? 'localhost';
  const url = `${protocol}://${host}${req.url}`;

  const headers = {};
  for (const [key, value] of Object.entries(req.headers)) {
    if (value !== undefined) {
      headers[key] = Array.isArray(value) ? value.join(', ') : String(value);
    }
  }

  let body;
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    body = await new Promise((resolve, reject) => {
      const chunks = [];
      req.on('data', (c) => chunks.push(c));
      req.on('end', () => resolve(Buffer.concat(chunks)));
      req.on('error', reject);
    });
  }

  const webReq = new Request(url, {
    method: req.method,
    headers,
    body: body?.length ? body : undefined,
  });

  const webRes = await app.fetch(webReq, {}, {});

  res.statusCode = webRes.status;
  for (const [key, value] of webRes.headers.entries()) {
    res.setHeader(key, value);
  }
  res.end(Buffer.from(await webRes.arrayBuffer()));
}
