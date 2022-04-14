const express = require('express');
const app = express();

app.get('/user', (req, res)=>{
    res.send('get works!');
});


app.post('/user', (req, res)=>{
    res.send('post works!');
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server has started!");
});