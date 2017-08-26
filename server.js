var express  = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql      = require('mysql');


app.get('/cor',function(req,res){
  var con = mysql.createConnection('mysql://root:root@localhost:3306/teste');
  con.query('select * from cor_camisetas',function(err,result,fields){
    res.json(result);
  });
  con.end();
});

app.get('/tamanho',function(req,res){
  var con = mysql.createConnection('mysql://root:root@localhost:3306/teste');
  con.query('select * from tam_camisetas',function(err,result,fields){
    res.json(result);
  });
  con.end();
});

app.get('/tipo',function(req,res){
  var con = mysql.createConnection('mysql://root:root@localhost:3306/teste');
  con.query('select * from tipo_camisetas',function(err,result,fields){
    res.json(result);
  });
  con.end();
});

 http.listen(8080, function(){
  console.log('listening on *:8080');
 });