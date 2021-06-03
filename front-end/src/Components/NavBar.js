import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="navbar d-flex">
            <Link to ='/' className='home-link'>Home</Link>
        </div>
    )
}

export default NavBar;