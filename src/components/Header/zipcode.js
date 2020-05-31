import React from 'react';
import { RiMapPin5Line } from 'react-icons/ri';

/*
 * Display the user's zip code
 *    - Would allow user to change the zip through this component
 *      but that was outside of the scope of this project.
 */
export default function ZipCode(props) {
    return (
        <div className="zip">
            <i className="icon"><RiMapPin5Line /></i>
            <span>{props.state.zip}</span>
        </div>
    )
}