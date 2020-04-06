import React from 'react';
import StripeButton from 'react-stripe-checkout';

const StripePayment = ({ price }) => {
    const total = price * 100;
    const key = 'pk_test_ZCgly31Uq2ZHY4UEQWvrMz9900ZM2vBP9Q';

    const onCallback = e => {
        console.log(e)
    }

    return (
        <StripeButton
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={total}
            panelLabel='Pay Now'
            token={onCallback}
            stripeKey={key}
            >
        </StripeButton>
    )
};

export default StripePayment;
