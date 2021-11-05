import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
//Components
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import Payment from './Components/Payment';
import Orders from './Components/Orders';

const promise = loadStripe('stripe/api');

function App() {
  const [{ }, dispatch] = useStateValue();


  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>

          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
