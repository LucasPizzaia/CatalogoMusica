// models/genreModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Album = require('./albumModel');

const Genre = sequelize.define('Genre', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Genre.belongsToMany(Album, { through: 'AlbumGenres', as: 'albums' });
Album.belongsToMany(Genre, { through: 'AlbumGenres', as: 'genres' });

module.exports = Genre;
