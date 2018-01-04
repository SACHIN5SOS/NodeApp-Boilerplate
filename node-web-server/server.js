const express= require('express');
const hbs = require('hbs');   //handlebars
var app=express();
app.set('viewengine','hbs');
app.use(express.static(__dirname + '/public'));
app.get('/',(req,res)=>{
    // res.send({
    //  name : 'Sachin',
    //  likes: [
    //      'Gaming',
    //      'Music'
    //  ]   
    // });
    res.render('home.hbs',{
        pageTitle:'Home Page',
        currentYear: new Date().getFullYear()
    });
});
app.get('/about',(req,res)=>{
 res.render('about.hbs',{
     pageTitle: 'About Page',
     currentYear: new Date().getFullYear()
 });
});
app.get('/bad',(req,res)=>{
    res.send({
        errorMessage:'Not connceted'
    })
});

app.listen(3000,()=>{
    console.log('Server is at port 3000');
});