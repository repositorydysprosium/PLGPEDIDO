const express = require("express");
const clienteRouter = express.Router();
const clienteController = require("../controller/cliente-controller");

clienteRouter.get("/", clienteController.getSave);
clienteRouter.get("/findAll", clienteController.getFindAll);
clienteRouter.post("/", clienteController.postSave);

module.exports = clienteRouter;