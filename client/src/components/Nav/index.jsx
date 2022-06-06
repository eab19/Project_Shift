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

        TweenMax.to($(`.sub-menu:nth-child(${number})`), 0.3, { background: '#2B303A' });
            
    }

    function out(event, number) {
        event.preventDefault()

        TweenMax.to($(`.sub-menu:nth-child(${number})`), 0.3, { background: '#4e6177' });

    }

    function revealMenu(event, number) {
        event.preventDefault()

        TweenMax.to($('.nav-menu'), 0, { pointerEvents: 'none' });
        TweenMax.to($(`.sub-menu:nth-child(${number})`), 0.3, { y: 10 });

        if (number === 2) {

            TweenMax.to($(`.sub-menu:nth-child(${number})`), 0.3, { delay: 0.3, width: 300, height: 180 });

        }

    }

    return (
        <>
        <nav id="main-nav">
            <div className="nav-menu pa-l" onMouseEnter={(e) => over(e, 1)} onMouseLeave={(e) => out(e, 1)} onClick={(e) => revealMenu(e, 1)}>
                <FontAwesomeIcon icon={faBars} />
            </div>

            <div className="nav-menu pa-l2" onMouseEnter={(e) => over(e, 2)} onMouseLeave={(e) => out(e, 2)} onClick={(e) => revealMenu(e, 2)}>
                <FontAwesomeIcon icon={faUser} />
            </div>

            <div className="nav-menu pa-r" onMouseEnter={(e) => over(e, 3)} onMouseLeave={(e) => out(e, 3)} onClick={(e) => revealMenu(e, 3)}>
                <FontAwesomeIcon icon={faCartShopping} />
            </div>

            <h1>Project - SHIFT</h1>

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
