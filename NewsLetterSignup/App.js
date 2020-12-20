const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.urlencoded({extended:true}))

app.post('/',(req,res)=>{
console.log(req.body)
res.send('Thanks for Data')
})

app.get('/',(req,res)=>{
res.sendFile( __dirname + '/Signup.html')
})
app.listen(3000,()=>{
    console.log('App is running on port 3000')
})

