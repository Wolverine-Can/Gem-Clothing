import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HzvecEqNoAGpjtGQQUpYFZs4KXayXQ217dMcepfjOTMT8LUDrdjny5zWIl8qwMpio7xumQq9lyqNdqAep6s7pM4008vLsMACE';
    const onToken = token => {
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='GEM Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://i.imgur.com/sexXZDH.png'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;