import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const { cart } = req.body;
  
        const lineItems = cart.map((item) => ({
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.name,
            },
            unit_amount: item.price, // Ensure price is in cents
          },
          quantity: item.quantity,
        }));
  
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: lineItems,
          mode: 'payment',
          success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/cancel`,
        });
  
        res.status(200).json({ sessionId: session.id });
      } catch (error) {
        console.error('Error creating Stripe session:', error); // Log the error
        res.status(500).json({ error: error.message });
      }
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  }
  