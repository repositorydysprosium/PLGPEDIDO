const mongoose = require("mongoose");
const schema = mongoose.Schema;

const DOC_PEDIDO = new schema({
    DOC_CLIENTE: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DOC_CLIENTE",
        required: true
    },
    DOC_FUNCIONARIO: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DOC_FUNCIONARIO",
        required: true
    },
    tipo_comida: {
        type: String,
        required: true,
        trim: true
    },
    tipo_bebida: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model("DOC_PEDIDO", DOC_PEDIDO);