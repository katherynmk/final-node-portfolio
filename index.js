const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/dice.html',function(req,res){
  res.sendFile(path.join(__dirname+'/dice.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/resume.html',function(req,res){
  res.sendFile(path.join(__dirname+'/resume.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/regexp.html',function(req,res){
  res.sendFile(path.join(__dirname+'/regexp.html'));
  //__dirname : It will resolve to your project folder.
});



app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');