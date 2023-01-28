/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from "react";
import blackLogo from '../images/logo-black.png'
import '../styles/header.css';

export default class Heading extends Component {
    
    render() {
        return (
            <div className="header">
                <header>
                    <div className="container">
                        <div className="header-logo">
                        <a href="#">
                            <img src={ blackLogo } alt="Techium logo" style={{width: '160', height: '40'}} />
                        </a>
                        </div>

                        <nav className="navbar-menu">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#services" className="nav-link">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#works" className="nav-link">Works</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#about" className="nav-link">About</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#latest_news" className="nav-link">Latest news</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#testimonials" className="nav-link">Testimonials</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#contact" className="nav-link">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}