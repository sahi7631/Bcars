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
                                <li><Link to="/about">ABOUT</Link></li>
                                <li><a href="/tour">RENT YOUR CAR</a></li>
                                <li><a href="/contact">CONTACT</a></li>
                                <li><Link to="/login">LOGIN</Link></li>
                                <li><a href="/signup">SIGNUP</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default HeaderContainer;