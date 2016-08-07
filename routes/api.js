var express = require('express');
var router = express.Router();
var mysql = require("mysql");

var connection = mysql.createConnection({
  host     : 'walle',
  user     : 'eese',
  password : 'M3t4!3php',
  database : 'ILO'
});

function printData(item,index) {
    return [item.id,item.name,item.abbreviation].join(" ");
}

connection.connect();

/* DB API */
router.get('/context', function(req, res, next) {
    connection.query("SELECT * FROM ENVIRONMENT", function(err, rows, fields) {
        if (err) throw err;
        //res.render(rows.map(printData));
        //res.json({"Error" : false, "Message" : "Success", "Users" : rows.map(printData)});
        res.json(rows);
        connection.end();
    });
});

module.exports = router;