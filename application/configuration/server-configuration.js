const application = require("./index-configuration");
const chaveConfiguration = require("./chave-configuration");
const databaseConnection = require("../connection/database-connection");

application.listen(chaveConfiguration.server.port, (error) => {
    databaseConnection.connect();
    if(error) {
        console.log("Falha na Aplicação. Contate o administrador!");
    } else {
        console.log(`Servidor Execuntando com Sucesso na porta: ${chaveConfiguration.server.port}`);
    }
});