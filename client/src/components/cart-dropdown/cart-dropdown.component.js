import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../redux/cart/cart-selector';
import { toggleCart } from '../redux/cart/cart-action';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.scss';

const CartDropdown = ({ items, history, toggleCart }) => {

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {items.length > 0? 
                    items.map(item => <CartItem key={item.id} item={item}/>) 
                    : 
                    <span className="empty-cart">Your cart is empty</span>}
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                toggleCart();
            }}>Go To Checkout</CustomButton>
        </div>
    );
}

// const mapStateToProps = state => ({
//     items: selectCartItems(state)
// })

const mapStateToProps = createStructuredSelector({
    items: selectCartItems
});

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
