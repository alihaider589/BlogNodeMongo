const express = require('express')
const bodyParser = require('body-parser')
const items = ["Buy Food","Cook Food","Eat Food"]

const app = express();
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    var today = new Date()
    var currentDay = today.getDay();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    var day = today.toLocaleDateString('en-US', options)




    res.render('list', { kindofday: day, newListItems: items })

})

app.post('/', (req, res) => {
    var item = req.body.todo


    items.push(item)

    res.redirect('/')
})


app.listen(3000, () => {
    console.log('App is running on port 3000')
})