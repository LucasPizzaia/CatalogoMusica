// models/artistModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Album = require('./albumModel');

const Artist = sequelize.define('Artist', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Artist.hasMany(Album, { foreignKey: 'artistId', as: 'albums' });
Album.belongsTo(Artist, { foreignKey: 'artistId', as: 'artist' });

module.exports = Artist;
