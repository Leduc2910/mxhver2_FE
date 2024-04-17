const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());

const cssDirectoryPath = path.join(__dirname, 'public','css');
const jsDirectoryPath = path.join(__dirname, 'public','javascript');
const homeDirectoryPath = path.join(__dirname, 'public','home');
const imgDirectoryPath = path.join(__dirname, 'public','img');
app.use('/css', express.static(cssDirectoryPath));
app.use('/javascript', express.static(jsDirectoryPath));
app.use('/home', express.static(homeDirectoryPath));
app.use('/img', express.static(imgDirectoryPath));
app.get('/', (req, res) => {
  const htmlPath = path.join(__dirname, 'public', 'html', 'loginAndRegister.html')
  res.sendFile(htmlPath)
})

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`)
})
