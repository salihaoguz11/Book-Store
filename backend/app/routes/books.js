"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BOOKS Project with Sequelize
------------------------------------------------------- */
// ROUTERS:

const books = require("../controllers/books.controllers");

const router = require("express").Router();

router.route("/").get(books.list).post(books.create);

router
  .route("/books/:id")
  .get(books.read)
  .put(books.update)
  .delete(books.delete);

module.exports = router;
