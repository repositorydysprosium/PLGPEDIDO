require("../model/funcionario-model");

const { request } = require("express");
const mongoose = require("mongoose");
const funcionarioDocument = mongoose.model("DOC_FUNCIONARIO");
const bcrypt = require("bcrypt");
const salt = 10;

class FuncionarioModel {
    
    static async persist(funcionario) {
        let { senha } = funcionario;
        const hash = await bcrypt.hash(senha, salt);
        senha = hash;
        funcionario.senha = senha;
        return await new funcionarioDocument(funcionario).save();
    };

    static async findAll(objeto) {
        return await funcionarioDocument.find().find({});
    };

    static async findOne(id) {
        return await funcionarioDocument.findOne({ _id: id });
    };

    static async merge(id, funcionario) {
        return await funcionarioDocument.findOneAndUpdate( id, {$set: funcionario} );
    };

    static async remove(id) {
        return await funcionarioDocument.findOneAndRemove(id);
    };

    static async autenticar(funcionario) {
        const { matricula } = funcionario;
        const funcionario = await funcionarioDocument.findOne({ matricula });
        return funcionario;
    };

}

module.exports = FuncionarioModel;