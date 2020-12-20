const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    const { num1, num2 } = req.body
    const result = Number(num1) + Number(num2)

    console.log(req.body.num1)
    res.send(`Thank you your result is ${result}`)

})


app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post('/bmicalculator',(req,res)=>{

const {Weight,Height}= req.body
const result = Number(Weight)/ (parseFloat(Height) * parseFloat(Height));

    res.send(`<h1>Your BMI is ${result}</h1>`)


})
app.listen(3000, console.log('Server Running on 3000'))