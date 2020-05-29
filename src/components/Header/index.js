import React, { useContext, useState, useRef, useEffect, useCallback } from 'react';
import Logo from './logo';
import Search from './search';
import ZipCode from './zipcode';
import Cart from './cart';
import { Store } from '../../store';

export default function Header() {
    const [state] = useContext(Store),
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

    return (
        <header className="header">
            <nav className="nav">
                <Logo />
                <Search />
                <ZipCode 
                    state={state}
                />
                <Cart 
                    cartNode={cartNode}
                    cartVisibility={cartVisibility}
                    setCartVisibility={setCartVisibility}
                />
            </nav>
        </header>
    )
}