import React from 'react';

// General
import { TweenMax } from 'gsap';
import $ from 'jquery';

// CSS
import '../../assets/styles/nav.css';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    function over(event, number) {
        event.preventDefault()
        
        TweenMax.to($(`.sub-menu:nth-child(${number})`), 0.3, { background: '#2B303A', y: 10 });
            
    }

    function out(event, number) {
        event.preventDefault()

        TweenMax.to($(`.sub-menu:nth-child(${number})`), 0.3, { background: '#4e6177', y: 0 });

    }

    return (
        <>
        <nav id="main-nav">
            <div className="nav-menu pa-l" onMouseEnter={(e) => over(e, 1)} onMouseLeave={(e) => out(e, 1)}><FontAwesomeIcon icon={faBars} /></div>
            <div className="nav-menu pa-l2" onMouseEnter={(e) => over(e, 2)} onMouseLeave={(e) => out(e, 2)}><FontAwesomeIcon icon={faUser} /></div>
            <div className="nav-menu pa-r" onMouseEnter={(e) => over(e, 3)} onMouseLeave={(e) => out(e, 3)}><FontAwesomeIcon icon={faCartShopping} /></div>
        </nav>

        <nav id="sub-nav">
            <div className="sub-menu pa-l"><FontAwesomeIcon icon={faChevronDown} /></div>
            <div className="sub-menu pa-l2"><FontAwesomeIcon icon={faChevronDown} /></div>
            <div className="sub-menu pa-r"><FontAwesomeIcon icon={faChevronDown} /></div>
        </nav>

        </>
    );
}

export default Nav;
