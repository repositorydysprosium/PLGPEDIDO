const mongose = require("mongoose");
const chaveConfiguration = require("../configuration/chave-configuration");

module.exports.connect = () => {
    mongose.connect(chaveConfiguration.database.connection, error => {
        if(error) {
            console.log("Erro ao tentar conexão com o Banco de Dados!");
            console.log(error);
        } else {
            console.log("Conexão com o Banco de Dados estabelecida com Sucesso!");
        }
    }, { useNewUrlParser: true });
}