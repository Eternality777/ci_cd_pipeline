const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

let visitCount = 0;
let helloCount = 0;

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.get('/api/visit', (req, res) => {
  visitCount++;
  res.json({ message: 'Visit counted', totalVisits: visitCount });
});

app.get('/api/hello', (req, res) => {
  helloCount++;
  res.json({ message: 'Hello from the backend!' });
});

app.get('/api/metrics', (req, res) => {
  res.json({
    serverTime: new Date().toISOString(),
    totalVisits: visitCount,
    helloApiCalls: helloCount
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
