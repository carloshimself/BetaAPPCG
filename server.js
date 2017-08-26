var express  = require('express');
var app = express();
var bodyParser = require('body-parser');

app.get('/',function(req,res){
    res.json({"testando":"produto"});
});


app.listen('3000',function(){
    console.log("Servidor Iniciado");
});