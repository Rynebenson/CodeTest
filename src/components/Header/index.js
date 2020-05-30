import React, { useContext, useState, useRef, useEffect, useCallback } from 'react';
import { Store } from '../../store';
import Logo from './logo';
import ZipCode from './zipcode';
import Cart from './cart';

export default function Header() {
    const [state, dispatch] = useContext(Store),
          [cartVisibility, setCartVisibility] = useState(false),
          cartNode = useRef()

    /**
     * Close cart dropdown by clicking outside of it.
     * 
     * @param {*} event 
     * @param {*} cartNode
     * @param {Boolean} cartVisibility
     */
    const handleClickOutside = useCallback(
        (event) => {
            if(cartVisibility && cartNode.current && !cartNode.current.contains(event.target)) {
                setCartVisibility(false)
            }
        }, [cartVisibility]
    );

    useEffect(() => {
        document.addEventListener("click", handleClickOutside)

        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [cartVisibility, handleClickOutside]);

    function openBasket() {
        dispatch({ type: "UPDATE_BASKET_VISIBILITY", payload: true })
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
                        cartNode={cartNode}
                        cartVisibility={cartVisibility}
                        setCartVisibility={setCartVisibility}
                    />
                </div>
            </nav>
        </header>
    )
}