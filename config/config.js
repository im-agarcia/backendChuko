const mysql = require('mysql2')
const dotenv = require('dotenv').config()

const db = mysql.createConnection({
    host: process.env.HOST_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

db.connect(function(err){
    if(err) throw err
    console.log('Database connected')
})

module.exports = db