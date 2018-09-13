import React, { Component } from 'react';
import './navBar.scss';

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const elem = document.querySelector('.sidenav');
        window.M.Sidenav.init(elem);
    }

    render() {
        return (

            <div id='navBar'>
                <nav className="white" role="navigation">
                    <div className="nav-wrapper container">

                        <a id="logo-container" href="#" className="brand-logo">MO:~ user$ <span className="flashit">|</span></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#mainPage">Home</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#about">About</a></li>
                        </ul>

                        <ul id="nav-mobile" className="sidenav">
                            <li><a href="#mainPage">Home</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#about">About</a></li>
                        </ul>
                        <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    </div>
                </nav>
            </div>
        )
    }
}


export default NavBar;