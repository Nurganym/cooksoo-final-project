import React, { Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return(
      <React.Fragment>
      {/* <Navbar />
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/combo' component={Combo} />
        <Route path='/about' component={About} />
        <Route path='/share' component={Share} />
        <Route path='/news' component={News} />
        <Route component={Default} />
      </Switch> */}
      </React.Fragment>
    )
  }
}

export default App;
