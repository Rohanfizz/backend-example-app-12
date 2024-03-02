const express = require("express");
const { createProduct, getAll, getById } = require("./productControllers");
const productRouter = express.Router();

// Create
productRouter.post("/", createProduct);

// Get all
productRouter.get("/", getAll);

// Get by id
productRouter.get("/:id", getById);

//Update by Id
productRouter.post("/", (req, res, next) => {});

// Delete all
productRouter.post("/", (req, res, next) => {});

// Delete by Id
productRouter.post("/", (req, res, next) => {});
module.exports = productRouter;
