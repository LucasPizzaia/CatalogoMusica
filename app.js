// app.js
const express = require("express");
const path = require("path");
const multer = require("multer");
const { sequelize } = require("./models");

const app = express();

// Importando Models e Controllers
const albumRoutes = require("./routes/albumRoutes");
const artistRoutes = require("./routes/artistRoutes");
const genreRoutes = require("./routes/genreRoutes");

// Configuração do Sequelize
sequelize.sync().then(() => {
  console.log("Database synced");
});

// Configuração do Express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("uploads"));

// Rotas
app.use("/albums", albumRoutes);
app.use("/artists", artistRoutes);
app.use("/genres", genreRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
