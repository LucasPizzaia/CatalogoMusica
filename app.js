// app.js
const express = require("express");
const path = require("path");
const multer = require("multer");

const { sequelize } = require("./models"); // Importando a instância do Sequelize a partir de models/index.js

const albumRoutes = require("./routes/albumRoutes");
const artistRoutes = require("./routes/artistRoutes");
const genreRoutes = require("./routes/genreRoutes");

const app = express();

// Sincronizando com o banco de dados
sequelize.sync().then(() => {
  console.log("Database synced");
}).catch(err => {
  console.log("Erro ao sincronizar o banco de dados", err);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("uploads"));

app.use("/albums", albumRoutes);
app.use("/artists", artistRoutes);
app.use("/genres", genreRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
