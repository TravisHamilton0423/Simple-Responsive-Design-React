import { GridRow } from 'emotion-flex-grid';
import React from 'react';

import './Left.scss'
import Menu from './Menu';

const Header = () => {
  return (
    <GridRow className='header-app' justify='between' align='center'>
      <div>
        <img src="smallstar.png" width="21px" height="21px" alt="*" />
        <img className='second-star' src="smallstar.png" width="21px" height="21px" alt="*" />
        <img src='cardo.png' width='74.33px' height='23.82px' alt='logo'></img>
      </div>
      <div className='menubar'>
        <Menu text="Deposit" />
        <Menu text="Dashboard" />
        <Menu text="Company" />
        <Menu text="Pricing" />
      </div>
      <div className='mobile-menu'>
        <img src='mobile-menu.png' width='21px' height='15px' alt='mobile-menu'/>
      </div>
    </GridRow>
  )
}

export default Header;