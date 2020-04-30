import React from 'react';
import headerStyles from './header.module.css';
import { GoGift } from 'react-icons/go';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import '../../index.css';

export default function Header() {
  return (
    <div className={headerStyles.header}>
      <Link to="/">
        <IconContext.Provider value={{ size: '2em', className: 'giftIcon' }}>
          <div>
            <GoGift />
          </div>
        </IconContext.Provider>
      </Link>
      <Link to="/login">
        <div>Log in/Register</div>
      </Link>
    </div>
  );
}
