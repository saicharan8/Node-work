var express = require('express');
//require('dotenv').config({path:'/ac/.env'});
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var fs=require('fs')
mongoose.connect('mongodb://localhost:27017/movies',function(err,data){   //mongoose connection
if (err){ 
    console.log('error')
}
else{
    console.log('mongoose connected')
}
})
var app = express();
var port = 3000 ;
app.get('/', function(req, res){
    res.send("Hey this is Ashish...");
});
var router = require('../routes/routes.js');
//middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/movies', router);
app.listen(port, function(){
    console.log("server is running on port  "+ port);
})


