const Contato = require("../../models/Contato");

function AgendasController() {
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
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => console.log(err));
  }

  function list(req, res) {
    Contato.findAll({ raw: true })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => console.log(err));
  }

  async function show(req, res) {
    const id = req.params.id;

    try {
      const data = await Contato.findOne({ where: { id: id }, raw: true });

      if (!data) {
        return res.status(404).send({
          message: "Contato não encontrado.",
        });
      }

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Deu M capitão!",
      });
    }
  }

  function remove(req, res) {
    const id = req.params.id;

    Contato.findOne({ where: { id: id }, raw: true })
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "Contato não encontrado.",
          });
        }

        Contato.destroy({ where: { id: id } })
          .then(() => {
            res.status(200).json({
              message: "Contato removido.",
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => res.json(err));
  }

  function update(req, res) {
    const id = req.params.id;

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

    Contato.findOne({ where: { id: id }, raw: true })
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "Contato não encontrado.",
          });
        }

        Contato.update(contato, { where: { id: id } })
          .then(() => {
            res.json({
              message: "Contato atualizado.",
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => res.json(err));
  }

  return {
    save,
    list,
    show,
    remove,
    update,
  };
}

module.exports = AgendasController();
