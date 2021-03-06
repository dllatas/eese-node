var express = require('express');
var router = express.Router();
var mysql = require("mysql");

var connection = mysql.createConnection({
  host     : 'walle',
  user     : 'eese',
  password : 'M3t4!3php',
  database : 'eese'
});

connection.connect();

/* DB API */
router.get('/context', function(req, res, next) {
    connection.query("SELECT * FROM context", function(err, rows, fields) {
        if (err) throw err;
        res.json({"table" : fields[0].table, "data" : rows});
        connection.end();
    });
});

router.get("/context/:id", function(req, res, next){
    var query = "SELECT * FROM ?? WHERE ?? = ?";
    var table = ["context", "id", req.params.id];
    query = mysql.format(query, table);
    connection.query(query, function(err, rows, fields) {
        if (err) throw err;
        res.json({"table" : fields[0].table, "data" : rows});
        connection.end();
    });
});

router.post("/context", function(req, res, next){
    var query = "INSERT INTO ??(??, ??) VALUES (?, ?)";
    var table = ["context", "name", "abbreviation", req.body.name, req.body.abbreviation];
    query = mysql.format(query, table);
    connection.query(query, function(err, rows){
        if (err) throw err;
        res.json({"Message" : "Context added !"});
        connection.end();
    });
});

router.delete("/context/:id", function(req, res, next) {
    var query = "DELETE from ?? WHERE ??=?";
    var table = ["context", "id", req.params.id];
    query = mysql.format(query, table);
    connection.query(query, function(err, rows){
        if (err) throw err;
        res.json({"Message" : "Deleted context with id " + req.params.id});
        connection.end();
    });
});

module.exports = router;