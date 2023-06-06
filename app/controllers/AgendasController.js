const Contato = require("../models/Contato");

function AgendasController() {
  function list(req, res) {
    Contato.findAll({ raw: true })
      .then((data) => {
        res.render("contatos/list", {
          title: "Lista de Contatos",
          contatos: data,
        });
      })
      .catch((err) => console.log(err));
  }

  function create(req, res) {
    res.render("contatos/create");
  }

  function save(req, res) {
    const { nome, celular, email, rua, numero, bairro, cidade, estado, cep } =
      req.body;

    const contato = {
      nome,
      celular,
      email,
      rua,
      numero,
      bairro,
      cidade,
      estado,
      cep,
    };

    Contato.create(contato)
      .then(res.redirect("/contatos"))
      .catch((err) => console.log(err));
  }

  function remove(req, res) {
    const id = req.params.id;

    Contato.destroy({ where: { id: id } })
      .then(res.redirect("/Contatos"))
      .catch((err) => console.log(err));
  }

  function edit(req, res) {
    const id = req.params.id;

    Contato.findOne({ where: { id: id }, raw: true })
      .then((data) => {
        res.render("Contatos/edit", { contato: data });
      })
      .catch((err) => console.log(err));
  }

  function update(req, res) {
    console.log(req.body);
    const id = req.body.id;

    const { nome, celular, email, rua, numero, bairro, cidade, estado, cep } =
      req.body;

    const contato = {
      nome,
      celular,
      email,
      rua,
      numero,
      bairro,
      cidade,
      estado,
      cep,
    };

    Contato.update(contato, { where: { id: id } })
      .then(res.redirect("/contatos"))
      .catch((err) => console.log(err));
  }

  return {
    create,
    save,
    list,
    remove,
    edit,
    update,
  };
}

module.exports = AgendasController();
