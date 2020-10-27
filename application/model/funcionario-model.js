const simpleMongooseCreator = require("simple-mongoose-creator");
simpleMongooseCreator.smc("DOC_FUNCIONARIO", {
    matricula: {
        type: Number,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true,
        trim: true
    }
})
module.exports = simpleMongooseCreator;