import React from 'react';
import './Header.css';
//import { NavLink } from 'react-router-dom';

const Header = () => (
    <div className="Header">
       <ul>
           <li><NavLink to="/">POSTS</Link></li>
           <li><NavLink to="/user">USERS</Link></li>
       </ul>
       POSTS
    </div>
);

export default Header;