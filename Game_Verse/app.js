const express = require(`express`);
const path = require(`path`);

const app = express();

const publicPath = path.join(__dirname, `/public`);
app.use(express.static(publicPath));

const port = 3030;

app.listen(port, () => {
  console.log(`Servidor corriendo en la direccion http://localhost:${port}`);
});

app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `/views/index.html`))
});