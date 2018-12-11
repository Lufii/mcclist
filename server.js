//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
// https://nodejs.org/api/path.html
const path = require('path');
const cors = require('cors');

// initializes express
const app = express();
app.use(cors());

//initializes body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.set('view engine', 'ejs');
// app.use('views', path.join(__dirname + '/views'));

//serves homepage
require('./routes/routes.js')(app);

//Connects to my mongodb and logs success.
MongoClient.connect('mongodb://1mesaic:1mesaic@ds247027.mlab.com:47027/mstlist', { useNewUrlParser: true }, (err, client) =>{
  if(err) return console.log(err);
  db = client.db('mstlist');
  app.listen(72, function(){
  console.log('CibolaBurn, port 72');
  })
})
