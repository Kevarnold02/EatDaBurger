var mysql = require('mysql');
var connection;
var connection = mysql.createConnection({
    port: 3000,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
});

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db',
    });
// } else{
//     connection.mysql.createConnection({
//     port: 3306,
//     host: 'jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     user: ' jawto1r62fv0h6iz',
//     password: 'u5dxrp8ybvsinde4',
//     database: 'burgers_db'
// })
};

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;