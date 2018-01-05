const express= require('express');
const hbs = require('hbs');   //handlebars
const fs= require('fs');

const port=process.env.PORT || 3000;
var app=express();

app.set('viewengine','hbs');

hbs.registerPartials(__dirname+'/views/partials');   //For using Partials in handlebars

app.use(express.static(__dirname + '/public'));  //middleware static

app.use((req,res,next)=>{
    var now= new Date().toString();
    var log= `${now}: ${req.method} ${req.url}`;
    fs.appendFile('server.log',log+ '\n',(err)=>{
        if(err){
            control.log('Unable to proceed');
        }
    });
    next();
});


hbs.registerHelper('screamIt',(text)=>{
    return text.toUpperCase()
});

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
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Welcome to my page'
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

app.listen(port,()=>{
    console.log(`Server is at port ${port}`);  
});
