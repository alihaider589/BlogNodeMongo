const express = require('express')
const bodyParser = require('body-parser')
const request = require('request');
const { json } = require('body-parser');

const app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))


app.post('/', (req, res) => {
    console.log(req.body)
    const { email, fname, lname } = req.body
    data = {
        members: [
            {
                email_address: email,

                status: 'subscribed',
                merge_fields: {
                    FNAME: fname,
                    LNAME: lname
                }
            }
        ]
    };
    var JsonData = JSON.stringify(data)
    options = {
        url: 'https://us7.api.mailchimp.com/3.0/lists/a41dbc0dc9',
        method: 'POST',
        headers: {
            "Authorization": "alihaider589 b63c88aa35aaa169610e184925e3222f-us7"
        },
        body: JsonData
    }
    request(options, (error, response, body) => {
        if (error) {
            console.log(error)
            res.sendFile(__dirname + '/Failure.html')
        } else {
            if (response.statusCode == 200) {
                res.sendFile(__dirname + '/Success.html')
            } else {
                res.sendFile(__dirname + '/Failure.html')
            }

        }
    })

    app.post('/Failure',(req,res)=>{
res.redirect('/')
    })


})



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Signup.html')

})
app.listen(process.env.PORT || 3000, () => {
    console.log('App is running on port 3000')
})


// Api Key
// b63c88aa35aaa169610e184925e3222f-us7

// LIST ID
// a41dbc0dc9
