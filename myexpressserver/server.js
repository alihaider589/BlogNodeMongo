const express = require('express')
const app = express();



app.get('/',(req,res)=>{
res.send('This is Home Page')
})

app.get('/contact',(req,res)=>{
    res.send('This is Contact Page')
    })

    
app.get('/about',(req,res)=>{
    res.send('This is About Page')
    })
    

app.listen(3000,
    console.log('App running on port 3000'))