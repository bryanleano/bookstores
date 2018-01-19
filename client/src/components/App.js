import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import Books from '../books/Books';
import StoreAndHours from './StoreAndHours';
import Contact from './Contact';
import ShoppingCart from './ShoppingCart';
import CreateBook from '../books/CreateBook';
import Footer from './Footer';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route exact path='/books' component={Books} />
            <Route exact path='/storeandhours' component={StoreAndHours} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/cart' component={ShoppingCart} />
            <Route exact path='/create' component={CreateBook} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default App;
