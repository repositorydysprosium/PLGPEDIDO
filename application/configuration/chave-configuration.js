module.exports = {
    server: {
        port: process.env.port || 8080
    },
    database: {
        connection: process.env.connection || "mongodb://127.0.0.1:27017"
    },
    authorization: {
        secret: "9876543210"
    }
}
