import React from 'react';
import { RiShoppingBasketLine } from 'react-icons/ri';

export default function Cart(props) {
    return (
        <div className="cart">
            <button className={`icon${props.cartVisibility ? ' active' : ''}`} onClick={() => props.setCartVisibility(!props.cartVisibility)}>
                <RiShoppingBasketLine />
            </button>
        </div>
    )
}