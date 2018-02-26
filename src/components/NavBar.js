import React from 'react';
import { NavLink } from 'react-router-dom'

const link = {
  background: 'blue'
}

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Home</NavLink>
      <NavLink
        to="/movies"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Movies</NavLink>
      <NavLink
        to="/actors"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Actors</NavLink>
      <NavLink
        to="/directors"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Directors</NavLink>
    </div>
  );
};


export default NavBar;
