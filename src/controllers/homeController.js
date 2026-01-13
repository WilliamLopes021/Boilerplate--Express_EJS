import HomeModel from "../models/HomeModel.js";

// HomeModel.findById()

export default new (class HomeController {
  paginaInicial(req, res) {
    res.render("index", {
      title: 'TITULO DA PÁGINA INDEX',
      nomes: ['Gabriel', 'William', 'Matheus', 'Rafael']
    });
  }

  trataForm(req, res) {
    return res.send(req.body.name);
  }
})();
