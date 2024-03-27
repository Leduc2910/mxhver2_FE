const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());

const cssDirectoryPath = path.join(__dirname, 'css');
const jsDirectoryPath = path.join(__dirname, 'javascript');
const homeDirectoryPath = path.join(__dirname, 'home');
const elementDirectoryPath = path.join(__dirname, 'element');
app.use('/css', express.static(cssDirectoryPath));
app.use('/javascript', express.static(jsDirectoryPath));
app.use('/home', express.static(homeDirectoryPath));
app.use('/element', express.static(homeDirectoryPath));
app.get('/', (req, res) => {
  const htmlPath = path.join(__dirname,'index.html')
  res.sendFile(htmlPath)
})

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`)
})
