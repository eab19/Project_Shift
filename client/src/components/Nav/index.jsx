import React from 'react';
// CSS
import '../../assets/styles/nav.css';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
        <>
        <nav id="main-nav">
            <div className="nav-menu pa-l"><FontAwesomeIcon icon={faBars} /></div>
            <div className="nav-menu pa-l2"><FontAwesomeIcon icon={faUser} /></div>
            <div className="nav-menu pa-r"><FontAwesomeIcon icon={faCartShopping} /></div>
        </nav>
        </>
    );
}

export default Nav;
