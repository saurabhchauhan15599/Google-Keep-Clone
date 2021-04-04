import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import './index.css';

const Header = () => {
  return (
    <div className="container container-fluid">
      <div className="header-left">
        <div className="logo-header">
          <h2>Google Keep</h2>
          <img src="https://www.google.com/images/icons/product/keep-512.png?" alt="google-keep-logo"/>
        </div>
      </div>
      <div className="header-right">
        <RefreshIcon />
      </div>
    </div>
  );
};
export default Header;  
