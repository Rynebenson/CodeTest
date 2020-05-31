import React, { useContext } from 'react';
import { Store } from '../../store';
import Logo from './logo';
import ZipCode from './zipcode';
import Cart from './cart';

export default function Header() {
    const [state, dispatch] = useContext(Store)

    /**
     * If the window is less than 968px, set the basket visiblity to true.
     * 
     * @param {Integer} window.innerWidth
     */
    function openBasketModal() {
        if(window.innerWidth < 968) {
            dispatch({ type: "UPDATE_BASKET_VISIBILITY", payload: true })
        }
    }

    return (
        <header className="header">
            <nav className="nav">
                <Logo />
                <div style={{display: "flex"}}>
                    <ZipCode 
                        state={state}
                    />
                    <Cart 
                        state={state}
                        openBasketModal={openBasketModal}
                    />
                </div>
            </nav>
        </header>
    )
}