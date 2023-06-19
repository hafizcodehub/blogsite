const express = require("express")
const colors = require("colors")
const dbconnect = require("./config/db")
const {PORT} = require('./config/index')

const app = express();


app.listen(PORT, console.log(`server is running at ${PORT}` .bgGreen));

dbconnect();
