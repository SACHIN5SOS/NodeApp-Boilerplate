const express= require('express');
const hbs = require('hbs');   //handlebars
var app=express();
app.set('viewengine','hbs');
hbs.registerPartials(__dirname+'/views/partials');   //For using Partials in handlebars
app.use(express.static(__dirname + '/public'));
hbs.registerHelper('screamIt',(text)=>{
    return text.toUpperCase()
})
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

app.listen(3000,()=>{
    console.log('Server is at port 3000');
});