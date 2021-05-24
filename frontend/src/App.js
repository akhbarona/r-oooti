import React from 'react'
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'
import CartPage from './Pages/CartPage';
import { useDispatch, useSelector } from 'react-redux';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ProductsPage from './Pages/ProdcutsPage';
import ProfilePage from './Pages/ProfilePage';
import ShippingPage from './Pages/ShippingPage';
import PaymentPage from './Pages/PaymentPage';
import { logout } from './actions/userActions';
import OrdersPage from './Pages/OrderListPage';
import DetailPage from './Pages/DetailPage';



function App() {
  const cart = useSelector((state) => state.cart);
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const { cartItems } = cart;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(logout());
  };
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
      <div className="brand">
      <Link to="/">R-<span>oooti</span></Link>
      </div>
      <div className="header-links">
        
        <Link to="/cart">Cart
        {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
        </Link>
        {
          userInfo ? 
          <div className="dropdown">
          <Link to="/profile">{userInfo.name}</Link> 
          <ul className="dropdown-content">
          <li>
            <Link to="/" onClick={signoutHandler}>
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
          
          :
         ( <Link to="/register">Register</Link>,
          <Link to="/login">Login</Link>)
        }
         {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                  <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
        
      </div>
    </header>
    <main className="main">
      <div className="content">
        <Route path="/order/:id" component={DetailPage} />
        <Route path="/orders" component={OrdersPage} />
        <Route path="/payment" component={PaymentPage} />
        <Route path="/shipping" component={ShippingPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/cart/:id?" component={CartPage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/" exact={true} component={HomePage} />
      </div>
    </main>
    <footer className="footer">
      <p>Hubungi Kami</p>
      &copy;{new Date().getFullYear()} BerkahStartUp Development
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
