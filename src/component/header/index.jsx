import React from 'react';
import Styles from './index.module.scss';

function Header() {
  return (
    <div className={Styles.header}>
         <div>For Creators</div>
         <div>For Products</div>
    </div>
  );
}

export default Header;
