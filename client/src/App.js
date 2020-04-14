import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth, createUser, createCollection } from './firebase/firebase.util';
import { selectCurrentUser } from './components/redux/user/user-selector';

import Header from './components/header/header.component';
// import Homepage from './pages/homepage/homepage.component';
// import Shop from './pages/shop/shop.component';
// import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { createCurrentUser, checkUserSession } from './components/redux/user/user-action';
// import Checkout from './pages/checkout/checkout.component';
import { GlobalStyle } from './GlobalCss';
import Spinner from './components/spinner/spinner';
import ErrorBoundary from './components/error-bounary/error-bounary';
const Homepage = lazy(()=>import('./pages/homepage/homepage.component'));
const Shop = lazy(()=>import('./pages/shop/shop.component'));
const SignInAndSignUp = lazy(()=>import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const Checkout = lazy(()=>import('./pages/checkout/checkout.component'));

const App = ({ currentUser, checkUserSession }) => {
    useEffect(() => {
        checkUserSession()
    }, [])
    return (
        <div>
            <GlobalStyle />
            <Header/>
            <Switch>

                <ErrorBoundary>
                    <Suspense fallback={()=><Spinner />}>
                        <Route exact path="/" component={Homepage}  />
                        <Route path="/shop" component={Shop} />
                        <Route exact path="/signin" render={()=> currentUser? <Redirect to="/" /> : <SignInAndSignUp />} />
                        <Route path="/checkout" component={Checkout}/>
                    </Suspense>
                </ErrorBoundary>


            </Switch>
    
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});
  
const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(App);
  