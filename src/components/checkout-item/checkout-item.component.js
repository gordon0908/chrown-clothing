import React from 'react';
import { connect } from 'react-redux';
import { removeItem, addItem, reduceItem } from '../redux/cart/cart-action';

import './checkout-item.scss';

const CheckoutItem = ({cartItem, removeItem, addItem, reduceItem}) => {
    const { id, imageUrl, name, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} />
            </div>

            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>reduceItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>

            <div className="remove-button" onClick={() => removeItem(cartItem)}>
                &#10005;
            </div>
        </div>
    )
}

export default connect(null, { removeItem, addItem, reduceItem })(CheckoutItem);
