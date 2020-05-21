import React, { Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import UserForm from './components/Form/UserForm';
import Combo from './components/Navbar/Combo';
import About from './components/Navbar/About';
import Share from './components/Navbar/Share';
import News from './components/Navbar/News';


class App extends Component {
  render() {
    return(
      <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/combo' component={Combo} />
        <Route path='/about' component={About} />
        <Route path='/share' component={Share} />
        <Route path='/news' component={News} />
        <Route path='/cart' component={Cart} />
        <Route path='/userForm' component={UserForm} />
        <Route component={Default} />
      </Switch>
      </React.Fragment>
    )
  }
}

export default App;
