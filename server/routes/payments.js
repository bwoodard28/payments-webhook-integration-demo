const express = require('express');
const Stripe = require('stripe');
require('dotenv').config();

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Simple: create a PaymentIntent for $9.99
router.post('/create-intent', async (req, res) => {
  try {
    const intent = await stripe.paymentIntents.create({
      amount: 999,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
      description: 'Demo purchase'
    });
    res.json({ id: intent.id, clientSecret: intent.client_secret });
  } catch (err) {
    console.error('create-intent error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;