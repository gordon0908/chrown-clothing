import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../components/redux/cart/cart-selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.scss';

const Checkout = ({ items, total }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>

            {items.map(item => <CheckoutItem key={item.id} cartItem={item}/>)}
            <div className="total">Total: {total}</div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    items: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(Checkout);
