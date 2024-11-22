// models/albumModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Artist = require('./artistModel');  // Importação do modelo Artist
const Genre = require('./genreModel');   // Importação do modelo Genre

const Album = sequelize.define('Album', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cover: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// Associações
Album.belongsTo(Artist, { foreignKey: 'artistId', as: 'artist' });
Album.belongsToMany(Genre, { through: 'AlbumGenres', as: 'genres' });
Genre.belongsToMany(Album, { through: 'AlbumGenres', as: 'albums' });

module.exports = Album;
