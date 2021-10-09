/* eslint-disable no-undef */
import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen.js';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import OrderScreen from './screens/OrderScreen';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userActions';

function App() {
  const cart = useSelector((state) => state.cart);
  // const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">E_SHOP</Link>
        </div>
        <div>
          <Link to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i>
          {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
          </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
        </div> 
      </header>  
      <main>
      <Route path="/cart/:id?" component={CartScreen}></Route>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/signin" component={SigninScreen}></Route>
      <Route path="/register" component={RegisterScreen}></Route>
      <Route path="/shipping" component={ShippingAddressScreen}></Route>
      <Route path="/payment" component={PaymentMethodScreen}></Route>
      <Route path="/placeorder" component={PlaceOrderScreen}></Route>
      <Route path="/order/:id" component={OrderScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
      </main>
      <footer className="row center">
      <i className="fa fa-copyright"></i>
      &nbsp; All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;




