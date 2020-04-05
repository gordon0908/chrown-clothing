import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart.svg';
import { connect } from 'react-redux';

import { selectCartItemsCount } from '../redux/cart/cart-selector';

import { toggleCart } from '../redux/cart/cart-action';


import './shopping-icon.scss';

const ShoppingLogo = ({ toggleCart, itemCount }) => (
    <div className="cart-icon" onClick={toggleCart}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCart: ()=>dispatch(toggleCart())
});

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingLogo);

