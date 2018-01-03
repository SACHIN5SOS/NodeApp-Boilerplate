const express= require('express');

var app=express();
app.get('/',(req,res)=>{
    res.send({
     name : 'Sachin',
     likes: [
         'Gaming',
         'Music'
     ]   
    });
});
app.get('/about',(req,res)=>{
 res.send('<h1>About Page</h1>');
});
app.get('/bad',(req,res)=>{
    res.send({
        errorMessage:'Not connceted'
    })
});

app.listen(3000);