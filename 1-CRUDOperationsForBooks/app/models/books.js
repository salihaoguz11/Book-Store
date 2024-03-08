"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BOOKS PROJECT
------------------------------------------------------- */
// MODELS:

const { Sequelize, DataTypes } = require("sequelize");
// sequelize instance oluştur:
const sequelize = new Sequelize("sqlite:./db.sqlite3");

const Books = sequelize.define("books", {
  title: DataTypes.STRING,
  author: DataTypes.STRING,
  ISBN: DataTypes.STRING,
  genre: DataTypes.STRING,
  publicationYear: DataTypes.INTEGER,
  image: DataTypes.TEXT,
});

// Syncronization:
sequelize.sync(); // CREATE TABLE

// Connect to db:

module.exports = Books;
