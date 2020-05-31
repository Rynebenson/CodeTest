import React from 'react';

// Created this for reusability as it is going to be used for most view components.
export default function Content(props) {
    return (
        <div className="content">
            { props.children }
        </div>
    )
}