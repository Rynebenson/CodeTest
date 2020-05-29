import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <img src={require("../../assets/images/FFC_logo_2_light.png")} alt="" />
                <nav className="nav">
                    <Link to="/">Service Locations</Link>
                    <Link to="/">Cheeses</Link>
                    <Link to="/">Specials</Link>
                </nav>
            </div>
        </footer>
    )
}