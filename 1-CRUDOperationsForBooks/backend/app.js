"use strict";
/* -------------------------------------------------------
  BE-ASS-01 : Basic Library Management System with CRUD Operations for Books
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data and convert object:
app.use(express.json());

// Catch async-errors:
require("express-async-errors");
/* ------------------------------------------------------- */
app.use(require("./app/routes/books"));

/* ------------------------------------------------------- */
// ErrorHandler:
app.use(require("./app/errorHandler"));
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
