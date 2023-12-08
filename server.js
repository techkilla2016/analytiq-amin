var fs = require('fs');
const https = require('https');
const auth_token = "BgvBbnOPUS"; 
const axios = require('axios');

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var options = {
  key: fs.readFileSync('./ssl/private.key'),
  cert: fs.readFileSync('./ssl/certificate.crt'),
};



// sendFile will go here
app.get('/', function(req, res) {
 res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/reports.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/reports.html'));
 });

 app.get('/registration_data.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/registration_data.html'));
 });

 app.get('/reset_registration', function(req, res) {
  res.sendFile(path.join(__dirname, '/reset_registration.html'));
 });

 app.get('/chess_all_scores.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/chess_all_scores.html'));
 });

 app.get('/default.gif', function(req, res) {
  res.sendFile(path.join(__dirname, '/default.gif'));
 });

 app.get('/sudoku_all_scores.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/sudoku_all_scores.html'));
 });
 
 app.get('/zero_score.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/zero_score.html'));
 });
 
 app.get('/only_registered.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/only_registered.html'));
 });

 app.get('/scrabble_all_scores.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/scrabble_all_scores.html'));
 });

 app.get('/chess_leaderboard.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/chess_leaderboard.html'));
 });

 app.get('/sudoku_leaderboard.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/sudoku_leaderboard.html'));
 });

 app.get('/scrabble_leaderboard.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/scrabble_leaderboard.html'));
 });

 app.get('/dummy', function(req, res) {
  res.sendFile(path.join(__dirname, '/dummy.html'));
 });

app.get('/data',async function(req2,res2){

  if(req2.query.token == auth_token)
  {
 // https.get(req2.query.url, res => {
   //   let data = [];
    //   const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    //   console.log('Status Code:', res.statusCode);
    //   console.log('Date in Response header:', headerDate);
    
    //   res.on('data', chunk => {
    //     data.push(chunk);
    //   });
    
    //   res.on('end', () => {
    //     console.log('Response ended: ');
    //      const users = JSON.parse(Buffer.concat(data).toString());
    
    //     // for(user of users) {
    //     //   console.log(`Got user with id: ${user.id}, name: ${user.name}`);
    //     // }
    //     res2.setHeader('Content-Type', 'application/json');
    //     res2.end(JSON.stringify(users));
    //   });
    // }).on('error', err => {
    //   console.log('Error: ', err.message);
    // });

    const response = await axios.get(req2.query.url, {
    });
    
    res2.setHeader('Content-Type', 'application/json');
    res2.end(JSON.stringify(response.data));
   
  }else
  {
    res2.send("[]")
  }
});

//app.listen(port);

var server = https.createServer(options,app).listen(port, function(){
  console.log("Express server listening on port " + port);
});

// console.log('Server started at http://localhost:' + port);
