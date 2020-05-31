import React from 'react';
import { Link } from 'react-router-dom';

/*
 * Display the footer.
 *    - This was not in the scope of the project. I included this because it added to the user experience.
 *      Because of this I left the links blank.
 */
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