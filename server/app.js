require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const paymentsRoute = require('./routes/payments');

const app = express();
const PORT = process.env.PORT || 4242;

app.use(bodyParser.json());

app.get('/', (_req, res) => res.send('OK: server alive on 4242'));
app.use('/payments', paymentsRoute);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));