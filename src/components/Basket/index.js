import React, { useContext } from 'react';
import { Store } from '../../store';

export default function Basket() {
    const [state, dispatch] = useContext(Store)

    return (
        <div className={`basket`}>
            <div className="container">
                <h1>Basket</h1>

                {
                    state.basket.length > 0 ? (
                        <div className="contents">
                            <div className="list">
                                {
                                    state.basket.map((item, index) => (
                                        <div key={index}>
                                            {item.cheese.name}
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="summary">
                            </div>
                        </div>
                    ) : (
                        <p className="empty-message">Your basket is empty. <br /><br/>Get started by adding some cheeses!</p>
                    )
                }
            </div>
        </div>
    )
}