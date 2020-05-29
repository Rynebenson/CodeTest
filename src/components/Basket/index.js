import React from 'react';

export default function Basket() {
    return (
        <div className={`basket`}>
            <div className="container">
                <h1>Basket</h1>

                <p className="empty-message">Your basket is empty. <br /><br/>Get started by adding some cheeses!</p>
            </div>
        </div>
    )
}