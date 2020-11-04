const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config.
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


// Setup static directory to serve
app.use(express.static(publicDirectoryPath));


app.get('', (req, res) => {
    res.render('index.hbs', {
        title: 'Weather App',
        name: 'Isa Ali'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Isa Ali'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help Page!',
        body: "If you need help, please contact isajaffarali@gmail.com."
    })
})

//1. No address? Send back an error message.
// 2. Address? Send back the JSON.
// 3. Add address property onto JSON which returns the provided address
// 4. Test /weather and /weather?address=philadelphia

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    res.send({
        forecast: "It is snowing",
        location: "philadelphia",
        address: req.query.address
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404header', {
        title: '404',
        name: 'Isa Ali',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404header', {
        title: '404',
        name: 'Isa Ali',
        errorMessage: 'Page not found.'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
