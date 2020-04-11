import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth, createUser, createCollection } from './firebase/firebase.util';
import { selectCurrentUser } from './components/redux/user/user-selector';

import { selectCollectionForPreview } from './components/redux/shop/shop-selector';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { createCurrentUser, checkUserSession } from './components/redux/user/user-action';
import Checkout from './pages/checkout/checkout.component';

import './App.css';


class App extends React.Component {
  constructor() {
    super(...arguments);
    // this.state = {
    //   currentUser: null
    // };
    this.subscribeFromGoogle = null;
  }
  componentDidMount() {
    this.props.checkUserSession();
/*
    this.subscribeFromGoogle = auth.onAuthStateChanged(async currentUser => {
      const { addCurrentUser } = this.props;

      if (currentUser) {
        const useProfile = await createUser(currentUser);

        useProfile.onSnapshot(snapShot => {
          addCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data()
          //   }
          // }, ()=> {
          //   console.log(this.state.currentUser)
          // })
        });
      }

      addCurrentUser(currentUser);


      // createCollection('collections', this.props.shopCollection.map(({ title, items }) => ({ title, items })));
    });
    */
  }
  componentWillUnmount() {
    this.subscribeFromGoogle && this.subscribeFromGoogle();
  }
  render() {
    const { currentUser } = this.props;

    return (
      <div>
  
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage}  />
          <Route path="/shop" component={Shop} />
          <Route exact path="/signin" render={()=> currentUser? <Redirect to="/" /> : <SignInAndSignUp />} />
          <Route path="/checkout" component={Checkout}/>
        </Switch>
  
      </div>
    );
  }
}

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  shopCollection: selectCollectionForPreview
});

const mapDispatchToProps = dispatch => ({
  addCurrentUser: currentUser => dispatch(createCurrentUser(currentUser)),
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
