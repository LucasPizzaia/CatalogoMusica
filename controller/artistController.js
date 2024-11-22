const { Artist, Album, Genre } = require("../models");

const artistController = {
  async list(req, res) {
    const artists = await Artist.findAll({ include: [Album, Genre] });
    res.render("artist", { artists });
  },

  async create(req, res) {
    const { name, genreIds } = req.body;
    const artist = await Artist.create({ name });
    await artist.addGenres(genreIds);
    res.redirect("/artists");
  },

  async edit(req, res) {
    const artist = await Artist.findByPk(req.params.id);
    const genres = await Genre.findAll();
    res.render("editArtist", { artist, genres });
  },

  async update(req, res) {
    const { name, genreIds } = req.body;
    const artist = await Artist.findByPk(req.params.id);
    await artist.update({ name });
    await artist.setGenres(genreIds);
    res.redirect("/artists");
  },

  async delete(req, res) {
    await Artist.destroy({ where: { id: req.params.id } });
    res.redirect("/artists");
  },
};

module.exports = artistController;
