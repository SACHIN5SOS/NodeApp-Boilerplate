const express= require('express');      //for access express module
const hbs = require('hbs');   //for acceess over viewengine handlebars
const fs= require('fs');  //for fs module

const port=process.env.PORT || 3000;  //declare port at 3000 as environment
var app=express();

app.set('viewengine','hbs');  //specify viewengine to hbs handlebars.. So view folder will containe all /files.

hbs.registerPartials(__dirname+'/views/partials');   //For using Partials in handlebars  //Register Partial for reusing a code

app.use(express.static(__dirname + '/public'));  //middleware static for rendering data


//To recording all logs by users
app.use((req,res,next)=>{  
    var now= new Date().toString();
    var log= `${now}: ${req.method} ${req.url}`;
    fs.appendFile('server.log',log+ '\n',(err)=>{
        if(err){
            control.log('Unable to proceed');
        }
    });
    next();   //without this it will not move on
});




hbs.registerHelper('screamIt',(text)=>{   //helper for hbs
    return text.toUpperCase()
});


//rendering through hbs handlebars
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

//Rendering without handlebars
app.get('/bad',(req,res)=>{
    res.send({
        errorMessage:'Not connceted'
    })
});

app.get('/projects',(req,res)=>{
    res.render('projects.hbs',{
        pageTitle:'Project Page'
    });
});

app.get('/contact',(req,res)=>{
    res.render('contact.hbs',{
       pageTitle:'Contact me',
       email:'sachinb443@gmail.com' 
    });
});

app.listen(port,()=>{
    console.log(`Server is at port ${port}`);  
});
