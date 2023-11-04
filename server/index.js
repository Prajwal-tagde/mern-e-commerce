const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send('hello world');
})

app.post("/pay", async (req, res) => {
    console.log(req.body.token);

    await Stripe.charges.create({
        source: req.body.token.id,
        amount: req.body.amount,
        currency: "inr"
    })
})


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
