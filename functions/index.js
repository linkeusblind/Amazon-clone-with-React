const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('your/api');


// API

// - App config
const app = express();

// - Middlewares
app.use(cors({
    origin: true
}));

app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('Hello from backend'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOOM !!!!', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunit of the currency
        currency: "pln",
    });

    // OK - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/amazing-react-app/us-central1/api