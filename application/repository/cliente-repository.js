require("../model/cliente-model");

const mongoose = require("mongoose");
const clienteDocument = mongoose.model("DOC_CLIENTE");

class ClienteModel {
    
    static async persist(cliente) {
        console.log(cliente);
        return await new clienteDocument(cliente).save();
    };

    static async findAll(objeto) {
        return await clienteDocument.find().find({});
    };

    static async findOne(id) {
        return await clienteDocument.findOne({ _id: id });
    };

    static async merge(id, cliente) {
        return await clienteDocument.findOneAndUpdate( id, {$set: cliente} );
    };

    static async remove(id) {
        return await clienteDocument.findOneAndRemove(id);
    };

}

module.exports = ClienteModel;