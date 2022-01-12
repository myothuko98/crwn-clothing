import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JKHTWHlbJHc9uokgQODI7zBvQ2Xr6JUvxHpHXbNEmLWtQHHFftE2sDipQZTCPoIVTzinEWEZrG2XKrW6fqQ3vRM00EQkIXBMi";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Success");
  };

  return (
    <StripeCheckout
      label="Pay with Stripe"
      name="Crown Clothing"
      billingAddress
      shippingAddress
      image="https://drive.google.com/uc?id=1XXh1KXK8cMGxjLCBkfv0J_ZY2GMHJdqq"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay with Stripe"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
