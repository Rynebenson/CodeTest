import React from 'react';
import { RiShoppingBag3Line } from 'react-icons/ri';

export default function Cart(props) {
    return (
        <div className="cart">
            <button className={`icon${props.cartVisibility ? ' active' : ''}`} onClick={() => props.setCartVisibility(!props.cartVisibility)}>
                <RiShoppingBag3Line />
            </button>
            <div className={`dropdown${props.cartVisibility ? ' visible' : ''}`}>
                <h2 className="title">Shopping Cart</h2>
            </div>
        </div>
    )
}