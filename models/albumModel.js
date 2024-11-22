// models/albumModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Artist = require('./artistModel');
const Genre = require('./genreModel');

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

Album.belongsTo(Artist, { foreignKey: 'artistId', as: 'artist' });
Album.belongsToMany(Genre, { through: 'AlbumGenres', as: 'genres' });

module.exports = Album;
