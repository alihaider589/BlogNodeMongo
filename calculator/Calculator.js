const express = require('express')
const bodyParser =require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
res.sendFile(__dirname +'/index.html')
})
app.post('/',(req,res)=>{
    const {num1,num2} = req.body
    const result = Number(num1)+Number(num2)
 
    console.log(req.body.num1)
    res.send(`Thank you your result is ${result}`)

})
app.listen(3000,console.log('Server Running on 3000'))