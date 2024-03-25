const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());

const cssDirectoryPath = path.join(__dirname, 'css');
const jsDirectoryPath = path.join(__dirname, 'javascript');

app.use('/css', express.static(cssDirectoryPath));

// Middleware để cài đặt MIME type cho các tệp tin JavaScript
app.use('/js', (req, res, next) => {
  res.set('Content-Type', 'application/javascript');
  next();
}, express.static(jsDirectoryPath));

app.get('/', (req, res) => {
  const htmlPath = path.join(__dirname, 'index.html')
  res.sendFile(htmlPath)
})

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`)
})
