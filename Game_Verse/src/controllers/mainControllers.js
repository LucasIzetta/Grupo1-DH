const juegos = require(`../utils/juegos`);

const mainControllers = {
  home: (req, res) => {
    res.render(`index.ejs`, { title: `Home`, css: `css/index.css` });
  },
  tienda: (req, res) => {
    res.render(`tienda.ejs`, { title: `Tienda`, css: `css/tienda.css` });
  },
  login: (req, res) => {
    res.render(`login-registro.ejs`, { title: `Login`, css: `css/login-registro.css` });
  },
  producto: (req, res) => {
    const id = req.params.id;
    const juego = juegos.find((juego) => juego.id == id);
    res.render(`producto.ejs`, { title: `Juego ${juego.name}`, css: `css/producto.css`, juego });
  }
}

module.exports = mainControllers;