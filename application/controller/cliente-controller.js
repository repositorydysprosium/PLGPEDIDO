const { request, response } = require("express");
const clienteRepository = require("../repository/cliente-repository");

exports.getSave = async(request, response, next) => {
    try {
        // return response.send("Página de Cadastro de Clientes...");
        return response.render("../application/views/autorizacao/login-view.ejs");
    } catch (error) {
        next(error);
    }
};

exports.postSave = async(request, response, next) => {
    try {
        const cliente = await clienteRepository.persist(request.body);
        return response.json(cliente);
    } catch (error) {
        next(error);
    }
};

exports.getFindAll = async (request, response, next) => {
    try {
        const findAll = await clienteRepository.findAll();
        return response.json(findAll);
    } catch (error) {
        next(error);
    }
};