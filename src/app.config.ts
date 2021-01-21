export default {
    databaseUrl: process.env.DEVQUOTES_DB_URL || 'mongodb://localhost',
    baseUrl: process.env.DEVQUOTES_URL || 'http://localhost:3000',
    port: process.env.DEVQUOTES_PORT || 3000,
};