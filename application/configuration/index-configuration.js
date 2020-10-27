const express = require("express");
const bodyParser = require("body-parser");
const application = express();
const clienteRouter = require("../router/cliente-router");

application.use(bodyParser.json({ limit: "10MB"}));
application.use(bodyParser.urlencoded({ extended: false }));

application.set("view engine", "ejs");
application.set("views", "views");

application.use(express.static("public"));

// Rotas do Cliente
application.use("/cliente", clienteRouter);

application.use("/", (require, response) => {
    // return response.send("Compilado com Sucesso!").status(200);
    return response.render("../application/views/autorizacao/login-view.ejs");
});

module.exports = application;
