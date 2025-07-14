// components/StripePaymentButton.tsx

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import CustomButton from './CustomButton';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

const StripePaymentButton = ({ amount }: { amount: number }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const stripe = await stripePromise;

    // Call your backend to create the Checkout session
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    const session = await res.json();

    // Redirect to the Stripe checkout page
    const { error } = await stripe!.redirectToCheckout({ sessionId: session.id });

    if (error) {
      console.error("Error redirecting to checkout:", error);
      setLoading(false);
    }
  };

  return (
    <CustomButton
      paddingX={6}
      paddingY={3}
      text="Proceed to Payment"
      buttonType="button"
      customWidth="auto"
      textSize="lg"
      onClick={handlePayment}
      disabled={loading}
    />
  );
};

export default StripePaymentButton;


