import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink
          activeClassName="active"
          to="/home"
        >
          HOME
        </NavLink>
      </li> 
      <li>
        <NavLink
          activeClassName="active"
          to="/movies"
        >
          MOVIE
        </NavLink>
      </li> 
      <li>
        <NavLink
          activeClassName="active"
          to="/users"
        >
          USERS
        </NavLink>
      </li> 
    </ul>
  )
};

export default Navbar; 