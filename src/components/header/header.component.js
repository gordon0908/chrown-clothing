import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../redux/cart/cart-selector';
import { selectCurrentUser } from '../redux/user/user-selector';

import { ReactComponent as Logo } from '../../assets/chrown.svg';
import ShoppingIcon from '../shopping-icon/shopping-icon.component';
import { auth } from '../../firebase/firebase.util';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { sagaSignOutStart } from '../redux/user/user-action';

import { HeaderContainer, LogoContainer, HeaderOptions, HeaderOptionLink, HeaderOptionDiv } from './header.styled';
// import "./header.component.scss";

const Header = ({ currentUser, hidden, sagaSignOutStart }) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo/>
            </LogoContainer>
            <HeaderOptions>
                <HeaderOptionLink to="/shop">Shop</HeaderOptionLink>
                <HeaderOptionLink to="/contact">Contact</HeaderOptionLink>
                {
                    currentUser? <HeaderOptionLink as="div" onClick={sagaSignOutStart}>Sign Out</HeaderOptionLink> : 
                    <HeaderOptionLink to="/signin">Sign In</HeaderOptionLink>
                }
                <ShoppingIcon />
            </HeaderOptions>
            {
                hidden? null : <CartDropdown />
            }
            
        </HeaderContainer>
    )
};

// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser,
//     hidden: state.cart.hidden
// });

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps, { sagaSignOutStart })(Header);
