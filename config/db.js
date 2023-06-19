const mongoose = require('mongoose')

const connectionString = "mongodb://127.0.0.1:27017/coin-bounce";

const dbconnect = async () =>
{
    try {
         await mongoose.connect(connectionString);
        console.log("Database is connecte successfully" .bgYellow)
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbconnect;

