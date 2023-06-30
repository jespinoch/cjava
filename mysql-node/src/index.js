const express = require('express');
const mysql = require('mysql2');
const conn = require('express-myconnection');
const route = require('./routes/index');

require('dotenv').config({ path: `../.env.development` });
const {PORT_DB, PORT,HOST,USER,PASSWORD,DATABASE} = process.env;

const app = express();

const dbconfig = {
    host: HOST,
    user: USER,
    password: PASSWORD,
    database : DATABASE,
    port: PORT_DB
}

console.log(dbconfig);
app.use(conn(mysql, dbconfig, 'single'));
app.use(express.json());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.use("/", route  );


app.listen(PORT, () => {
    console.log('Listening on port:', PORT)
});


