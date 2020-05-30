import React from 'react';

// display the sum of the items in the user's basket
export default function Summary(props) {
    return (
        <div className="summary">
            <h1>Summary</h1>
            <div>
                <h4>Total</h4>
                <h3>${props.sum.toFixed(2)}</h3>
            </div>
            <button className="checkout">Checkout</button>
        </div>
    )
}