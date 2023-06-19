const mongoose = require('mongoose')
const {MONGODB_CONNECTION_STRING} = require('./index')

const dbconnect = async () =>
{
    try {
         await mongoose.connect(MONGODB_CONNECTION_STRING);
        console.log("Database is connected" .bgYellow)
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbconnect;

