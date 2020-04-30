import React from 'react';
import headerStyles from './header.module.css';
import { GoGift } from 'react-icons/go';
import { IconContext } from 'react-icons';
import '../../index.css';

export default function Header() {
  return (
    <div className={headerStyles.header}>
      <IconContext.Provider value={{ size: '2em', className: 'giftIcon' }}>
        <div>
          <GoGift />
        </div>
      </IconContext.Provider>
      <div>Log in/Register</div>
    </div>
  );
}
