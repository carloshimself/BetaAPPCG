var express  = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var consign = require('consign')
consign().include('app').into(app);


app.get('/cor',function(req,res){
  var con = app.app.connectionFactory();
  var camisas = new app.app.models.camisaDao(con);
  
  camisas.listaCor(function(err,result,fields){
    res.json(result);
  });
  
  con.end();
});


app.get('/tamanho',function(req,res){
  var con = app.app.connectionFactory();
  var camisas = new app.app.models.camisaDao(con);
  
  camisas.listaTipo(function(err,result,fields){
    res.json(result);
  });
  
  con.end();
});


app.get('/tipo',function(req,res){
  var con = app.app.connectionFactory();
  var camisas = new app.app.models.camisaDao(con);
  
  camisas.listaTamanho(function(err,result,fields){
    res.json(result);
  });
  
  con.end();
});


http.listen(process.env.PORT || 8080, function(){
  console.log('listening on', process.env.PORT|| 8080);
});

//Username: user3HC
//Password: NbJ1dmd7sDfPxjOs
//Database Name: sampledb
//Connection URL: mysql://mysql:3306/