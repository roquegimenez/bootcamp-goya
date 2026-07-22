const   mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.database_url);
    } catch (error) {
        console.error('Error connecting to the database:' + error.message);
        process.exit(1);
    }
};

mongoose.connection.on('connected', () => {
    console.log('===============================================');
    console.log('============BASE DE DATOS CONECTADA===========');
    console.log('===============================================');
});

mongoose.connection.on('disconnected', () => {
    console.log('===============================================');
    console.log('============BASE DE DATOS DESCONECTADA==========');
    console.log('===============================================');
});

process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('===============================================');
    console.log('============BASE DE DATOS DESCONECTADA==========');
    console.log('===============================================');
    process.exit(0);
});

module.exports = connectDB;