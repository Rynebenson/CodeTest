import React from 'react';
import { RiShoppingBasketLine } from 'react-icons/ri';

// A button that will open the basket modal if the screen is smaller than 968px.
export default function Cart(props) {
    return (
        <div className="cart">
            <button className={`icon${props.cartVisibility ? ' active' : ''}`} onClick={() => props.openBasketModal()}>
                <div className={`notification${props.state.basket.length > 0 ? ' visible' : ''}`}>
                    {
                        /* 
                         * If there are more than 9 items in the cart display 9+
                         * for design purposes.
                         */
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