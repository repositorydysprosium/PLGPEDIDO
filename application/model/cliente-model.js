const simpleMongooseCreator = require("simple-mongoose-creator");
simpleMongooseCreator.smc("DOC_CLIENTE", {
    nome: {
        type: String,
        required: true,
        trim: true
    },
    telefone: {
        type: String,
        required: true
    }
})
module.exports = simpleMongooseCreator;