import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='navbar navbar-dark bg-dark'>
      <img src={Logo} alt="" />
      <h3 className='titulo'>Henry - Wheater App</h3>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
