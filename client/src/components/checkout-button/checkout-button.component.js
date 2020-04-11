import React from 'react';
import StripeButton from 'react-stripe-checkout';
import axios from 'axios';

const StripePayment = ({ price }) => {
    const total = price * 100;
    const key = 'pk_test_ZCgly31Uq2ZHY4UEQWvrMz9900ZM2vBP9Q';
console.log(price, '======');
    const onCallback = e => {
        axios.post('payment', { amount: total, token: e }).then(response=>{
            console.log(response)
        }).catch(e => {
            console.log(e);
        })
    }

    return (
        <StripeButton
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${total}`}
            amount={total}
            panelLabel='Pay Now'
            token={onCallback}
            stripeKey={key}
            >
        </StripeButton>
    )
};

export default StripePayment;
