const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (request, response) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}


app.listen(port, error => {
    if (error) console.error(error);

    console.log('server started');
});

app.post('/payment', (request, response) => {

    const body = {
        source: request.body.token.id,
        amount: request.body.amount,
        currency: 'usd'
    };

    stripe.charges.create(body, (stripeError, stripeResponse) => {
        if (stripeError) {
            return response.status(500).send({ error: stripeError });
        } else {
            return response.send({ success: stripeResponse });
        }
    })
});