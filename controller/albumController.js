const { Album, Artist, Genre, Track } = require("../models");

const albumController = {
  async list(req, res) {
    const albums = await Album.findAll({
      include: [{ model: Artist }, { model: Genre }, { model: Track }],
    });
    res.render("album", { albums });
  },

  async create(req, res) {
    const { title, year, artistId, genreIds, tracks } = req.body;
    const album = await Album.create({
      title,
      year,
      cover: req.file.filename, // upload da capa
      artistId,
    });

    // Associa gêneros e cria faixas
    await album.addGenres(genreIds);
    for (const track of tracks) {
      await Track.create({ name: track, albumId: album.id });
    }
    res.redirect("/albums");
  },

  async edit(req, res) {
    const album = await Album.findByPk(req.params.id);
    const genres = await Genre.findAll();
    const artists = await Artist.findAll();
    res.render("editAlbum", { album, genres, artists });
  },

  async update(req, res) {
    const { title, year, artistId, genreIds } = req.body;
    const album = await Album.findByPk(req.params.id);
    await album.update({ title, year, artistId });
    await album.setGenres(genreIds);
    res.redirect("/albums");
  },

  async delete(req, res) {
    await Album.destroy({ where: { id: req.params.id } });
    res.redirect("/albums");
  },
};

module.exports = albumController;
