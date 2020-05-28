import React, { useContext, useState } from 'react';
import Logo from './logo';
import Search from './search';
import ZipCode from './zipcode';
import Cart from './cart';
import { Store } from '../../store';

export default function Header() {
    const [state] = useContext(Store),
          [cartVisibility, setCartVisibility] = useState(false);

    return (
        <header className="header">
            <nav className="nav">
                <Logo />
                <Search />
                <ZipCode 
                    state={state}
                />
                <Cart 
                    cartVisibility={cartVisibility}
                    setCartVisibility={setCartVisibility}
                />
            </nav>
        </header>
    )
}