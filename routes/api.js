var express = require('express');
var router = express.Router();
var mysql = require("mysql");

var connection = mysql.createConnection({
  host     : 'walle',
  user     : 'eese',
  password : 'M3t4!3php',
  database : 'eese'
});

function printData(item,index) {
    return [item.id,item.name,item.abbreviation].join(" ");
}

connection.connect();

/* DB API */
router.get('/context', function(req, res, next) {
    connection.query("SELECT * FROM context", function(err, rows, fields) {
        if (err) throw err;
        //res.render(rows.map(printData));
        //res.json({"Error" : false, "Message" : "Success", "Users" : rows.map(printData)});
        res.json(rows);
        connection.end();
    });
});

router.get("/context/:id", function(req, res, next){
    var query = "SELECT * FROM ?? WHERE ?? = ?";
    var table = ["context", "id", req.params.id];
    query = mysql.format(query, table);
    console.log(query);
    connection.query(query,function(err,rows){
        if(err) {
            res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            res.json(rows);
        }
    });
});

router.post("/context", function(req, res, next){
    var query = "INSERT INTO ??(??, ??) VALUES (?, ?)";
    var table = ["context", "name", "abbreviation", req.body.name, req.body.abbreviation];
    query = mysql.format(query, table);
    console.log(query);
    connection.query(query, function(err, rows){
        if(err) {
            res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            res.json({"Error" : false, "Message" : "Context added !"});
        }
    });
});

router.delete("/context/:id", function(req, res, next) {
    var query = "DELETE from ?? WHERE ??=?";
    var table = ["context", "id", req.params.id];
    query = mysql.format(query, table);
    connection.query(query, function(err, rows){
        if(err) {
            res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            res.json({"Error" : false, "Message" : "Deleted context with id " + req.params.id});
        }
    });
});

module.exports = router;