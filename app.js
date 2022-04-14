const express = require('express');
const app = express();

app.get('/user', (req, res)=>{
    res.send('get works!');
});


app.post('/user', (req, res)=>{
    res.send('post works!');
});

app.listen(3000, ()=> {
    console.log('server running on 3000');
})