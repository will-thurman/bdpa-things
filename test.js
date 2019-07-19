var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password"
});

connection.connect(function(err) {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log("Connected!");

    connection.query("CREATE DATABASE firstdb", function (err, result) {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log("Created firstdb");
    });
    
    connection.query("DROP DATABASE firstdb", function (err, result) {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log("Dropped firstdb");
    });
});