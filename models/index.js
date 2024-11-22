// models/index.js
const Artist = require('./artistModel');
const Album = require('./albumModel');
const Genre = require('./genreModel');

const db = { Artist, Album, Genre };

// Definindo as associações
Artist.hasMany(Album, { foreignKey: 'artistId', as: 'albums' });
Album.belongsTo(Artist, { foreignKey: 'artistId', as: 'artist' });
Album.belongsToMany(Genre, { through: 'AlbumGenres', as: 'genres' });
Genre.belongsToMany(Album, { through: 'AlbumGenres', as: 'albums' });

module.exports = db;
