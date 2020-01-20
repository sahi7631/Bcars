import React from 'react';
import HeaderContainerAbstract from './HeaderContainerAbstract';
import { Link } from "react-router-dom";

class HeaderContainer extends HeaderContainerAbstract {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <nav class="navbar navbar-default navbar-fixed-top">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#myPage">Logo</a>
                        </div>

                        <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="/">HOME</a></li>
                                {/* <li><Link to="/about">ABOUT</Link></li> */}
                                <li><a href="/earnwithus">EARN WITH US</a></li>
                                <li><Link to="/offers">OFFERS</Link></li>
                                <li><Link to="/mobileapp">MOBILE APP</Link></li>
                                <li><a href="/login">LOGIN</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default HeaderContainer;