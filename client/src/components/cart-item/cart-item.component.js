import React, { memo } from 'react';

import './cart-item.scss';

const CartItem = ({item: { imageUrl, quantity, name, price }}) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="your title"/>

            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} * {price}</span>
            </div>
        </div>
    )
}

export default memo(CartItem);