import React from 'react';
import { RiMapPin5Line } from 'react-icons/ri';

export default function ZipCode(props) {
    return (
        <div className="zip">
            <i className="icon"><RiMapPin5Line /></i>
            <span>{props.state.zip}</span>
        </div>
    )
}