"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
// CONTROLLERS:

const Books = require("../models/books");
module.exports = {
  list: async (req, res) => {
    const data = await Books.findAndCountAll();

    res.status(200).send({
      error: false,
      result: data,
    });
  },

  create: async (req, res) => {
    const data = await Books.create(req.body);

    res.status(201).send({
      error: false,
      result: data.dataValues,
    });
  },
  read: async (req, res) => {
    const data = await Todo.findByPk(req.params.id);

    res.status(200).send({
      error: false,
      result: data,
    });
  },
  update: async (req, res) => {
    const data = await Books.update(req.body, { where: { id: req.params.id } });

    res.status(202).send({
      error: false,
      message: "Updated",
      body: req.body,
      result: data,
      new: await Books.findByPk(req.params.id),
    });
  },
  delete: async (req, res) => {
    const data = await Books.destroy({ where: { id: req.params.id } });
    if (data > 0) {
      res.send(204);
    } else {
      res.errorStatusCode = 404;
      throw new Error("Not Found");
    }
  },
};
