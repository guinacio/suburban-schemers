// Minimal server to inject GEMINI_API_KEY from Cloud Run environment into HTML
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files (JS, CSS, etc.)
app.use(express.static(path.join(__dirname, 'dist'), { index: false }));

// Inject API key into HTML for all routes (SPA support)
app.get('*', (req, res) => {
  const htmlPath = path.join(__dirname, 'dist', 'index.html');
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Inject API key as a script tag in the head
  const apiKey = process.env.GEMINI_API_KEY || '';
  const script = `<script>window.__GEMINI_API_KEY__ = ${JSON.stringify(apiKey)};</script>`;
  html = html.replace('<head>', `<head>${script}`);
  
  res.send(html);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

