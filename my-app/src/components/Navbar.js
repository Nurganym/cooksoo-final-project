import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../logo1.png'

export default class Navbar extends Component {
  render() {
      return(
         <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
          {/* <Link to="/">
       <img src={logo} alt="logo-cooksoo" className="navbar-brand" width="140px" height="60px" />
          </Link> */}
          <Link to="/">
              <span>Cooksoo</span>
          </Link>
          <ul className="navbar-nav align-items-center">
              <li className="nav-item ml-5">
                  <Link to="/" className="nav-link">
                   меню
                  </Link>
                  </li>
                  <li className="nav-item ml-5">
                  <Link to="/" className="nav-link">
                   о нас
                  </Link>
                  </li>
                  <li className="nav-item ml-5">
                  <Link to="/" className="nav-link">
                   акции
                  </Link>
                  </li>
                  <li className="nav-item ml-5">
                  <Link to="/" className="nav-link">
                   новости
                  </Link>
              </li>
          </ul>
          <Link to="./cart" className="ml-auto">
              <button>
                  <i className="fas fa-cart-plus"></i>
                  Корзина
              </button>

          </Link>
         </nav>
      )
  }
};