import React from 'react';
import { RiShoppingBasketLine } from 'react-icons/ri';

export default function Cart(props) {
    return (
        <div className="cart">
            <button className={`icon${props.cartVisibility ? ' active' : ''}`} onClick={() => props.openBasket()}>
                <div className={`notification${props.state.basket.length > 0 ? ' visible' : ''}`}>
                    {
                        props.state.basket.length > 9 ? (
                            "9+"
                        ) : (
                            props.state.basket.length
                        )
                    }
                </div>
                <RiShoppingBasketLine />
            </button>
        </div>
    )
}