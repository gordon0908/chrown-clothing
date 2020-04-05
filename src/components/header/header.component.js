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


import "./header.component.scss";

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">Shop</Link>
                <Link to="/contact" className="option">Contact</Link>
                {
                    currentUser? <div className="option" onClick={()=>auth.signOut()}>Sign Out</div> : <Link to="/signin" className="option">Sign In</Link>
                }
                <ShoppingIcon />
            </div>
            {
                hidden? null : <CartDropdown />
            }
            
        </div>
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

export default connect(mapStateToProps)(Header);
