import React from 'react';
import { Link, animateScroll as scroll} from 'react-scroll';
import {FaHome} from 'react-icons/fa';

class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" onClick={() => scroll.scrollToTop()}><FaHome size={30}/></Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="aboutpage" spy={true} smooth={true} offset={-58} duration={2000}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="productpage" spy={true} smooth={true} offset={-70} duration={2000}>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="gofundme" spy={true} smooth={true} offset={-20} duration={2000}>GoFundMe</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="sponsorpage" spy={true} smooth={true} offset={100} duration={2000}>Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contactpage" spy={true} smooth={true} offset={-20} duration={2000}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;