const { Genre } = require("../models");

const genreController = {
  async list(req, res) {
    const genres = await Genre.findAll();
    res.render("genre", { genres });
  },

  async create(req, res) {
    const { name } = req.body;
    await Genre.create({ name });
    res.redirect("/genres");
  },

  async edit(req, res) {
    const genre = await Genre.findByPk(req.params.id);
    res.render("editGenre", { genre });
  },

  async update(req, res) {
    const { name } = req.body;
    const genre = await Genre.findByPk(req.params.id);
    await genre.update({ name });
    res.redirect("/genres");
  },

  async delete(req, res) {
    await Genre.destroy({ where: { id: req.params.id } });
    res.redirect("/genres");
  },
};

module.exports = genreController;
