import React from 'react';

import './cart-item.scss';

export default ({item: { imageUrl, quantity, name, price }}) => {
    return (
        <div className="cart-item">
            <img src={imageUrl}/>

            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} * {price}</span>
            </div>
        </div>
    )
}