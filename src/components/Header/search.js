import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

export default function Search() {
    return (
        <div className="search">
            <div className="input">
                <i className="icon"><RiSearchLine /></i>
                <input
                    type="text"
                    placeholder="Search Frank's Fine Cheeses"
                />
            </div>
        </div>
    )
}