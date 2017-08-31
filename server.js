var express  = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var consign = require('consign')
consign().include('app').into(app);


app.post("/camisa/cad",function(req,res){
    var camisa_f = req.body;
    var con = app.app.connectionFactory();
    var camisas = new app.app.models.camisaDao(con);
    camisas.cadastraCamisa(camisa_f);    
    con.end();
});

app.post("/camisa/altera",function(req,res){
  var camisa_f = req.body;
  var con = app.app.connectionFactory();
  var camisas = new app.app.models.camisaDao(con);
  camisas.cadastraCamisa(camisa_f);    
  con.end();
});


app.get('/camisa-list/cor',function(req,res){
  var con = app.app.connectionFactory();
  var camisas = new app.app.models.camisaDao(con);
  
  camisas.listaCor(function(err,result,fields){
    res.json(result);
  });
  
  con.end();
});

app.get('/camisa-list/tamanho',function(req,res){
  var con = app.app.connectionFactory();
  var camisas = new app.app.models.camisaDao(con);
  
  camisas.listaTipo(function(err,result,fields){
    res.json(result);
  });
  
  con.end();
});


app.get('/camisa-list/tipo',function(req,res){
  var con = app.app.connectionFactory();
  var camisas = new app.app.models.calcasDao(con);
  
  camisas.listaTamanho(function(err,result,fields){
    res.json(result);
  });
  con.end();
});

//calças
app.get('/calcas-list/cor',function(req,res){
  var con = app.app.connectionFactory();
  var calcas = new app.app.models.calcasDao(con);
  
  calcas.listaCor(function(err,result,fields){
    res.json(result);
  });
  
  con.end();
});


app.get('/calcas-list/tipo',function(req,res){
  var con = app.app.connectionFactory();
  var calcas = new app.app.models.calcasDao(con);
  
  calcas.listaTipo(function(err,result,fields){
    res.json(result);
  });
  
  con.end();
});


app.get('/calcas-list/tamanho',function(req,res){
  var con = app.app.connectionFactory();
  var calcas = new app.app.models.calcasDao(con);
  
  calcas.listaTamanho(function(err,result,fields){
    res.json(result);
  });
  con.end();
});


http.listen(process.env.PORT || 9090, function(){
  console.log('listening on', process.env.PORT|| 9090);
});

//Username: user3HC
//Password: NbJ1dmd7sDfPxjOs
//Database Name: sampledb
//Connection URL: mysql://mysql:3306/
//http://www.luiztools.com.br/post/como-criar-uma-api-com-nodejs/