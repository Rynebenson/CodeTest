import React, { useContext } from 'react';
import { Store } from '../../store';
import Logo from './logo';
import ZipCode from './zipcode';
import Cart from './cart';

export default function Header() {
    const [state, dispatch] = useContext(Store)

    function openBasket() {
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
                        openBasket={openBasket}
                    />
                </div>
            </nav>
        </header>
    )
}