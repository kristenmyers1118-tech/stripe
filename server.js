// This is your test secret API key. Stripe automatically fills it in for code samples.
// Don't put any keys in code. See https://docs.stripe.com/keys-best-practices.
const stripe = require('stripe')('sk_test_51UBvgKFxqLtKafEJ4NWEEYjwM5GgvkcmptVzR0ocTLt5E67y01G5valvfARuPtwMUgJ0ZXh7PqKPKGIiJoKJxakk00y1gm2i1m');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, price_1234) of the product you want to sell
        price: 'price_1UBxsGFxqLtKafEJ4y8iKedu',
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: `https://www.yourcozygamer.com/test-success`,
    // Provide a name (for example, hosted_web_0001) to label this Checkout integration and measure its conversion independently
    integration_identifier: '{{INTEGRATION_ID}}',
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));
