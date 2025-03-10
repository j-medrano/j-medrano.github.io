import React from 'react'
import { Link } from 'react-router-dom';

import CoffeeLogo from '../images/logo.svg';
import CartIcon from '../images/cart.svg';
import JM from '../images/logo.png'
import './Header.css'
function Header({title }) {
  return (
    <header className="header-component">
      <Link >
        <img src={JM} alt={title} />
      </Link>
      {/* <div className="menu">
        <Link >
          <img src={CartIcon} alt="Cart" />
        </Link>
      </div> */}
    </header>
  )
}

export default Header
