import React, { useContext } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { Store } from '../../store';
import { calculate_price } from '../../utils';

export default function Basket() {
    const [state, dispatch] = useContext(Store)

    /**
     * Handle removing item from basket
     * 
     * @param {Integer} index 
     */
    function handleRemove(id) {
        dispatch({ type: "REMOVE_FROM_BASKET", payload: id });
    }

    function handleBasketClose() {
        dispatch({ type: "UPDATE_BASKET_VISIBILITY", payload: false })
    }

    function calculate_total() {
        let sum = 0;

        for(var i = 0; i < state.basket.length; i++) {
            sum += calculate_price(state.basket[i].cheese.price, state.basket[i].percent_discount)
        }

        return sum
    }

    return (
        <div className={`basket${state.basket_visibility ? ' visible' : ''}`}>
            <div className="container">
                <h1>Basket</h1>
                <button className="close" onClick={() => handleBasketClose()}><RiCloseLine /></button>

                {
                    state.basket.length > 0 ? (
                        <div className="contents">
                            <div className="list">
                                {
                                    state.basket.map((item, index) => (
                                        <div className="item" key={index}>
                                            <div className="row one">
                                                <div className="">
                                                    <h1 className="name">{item.cheese.name}</h1>
                                                    <h2 className="country">{item.cheese.country}</h2>
                                                </div>
                                                <div>
                                                <h3 className={`price${item.percent_discount > 0 ? ' discounted' : ''}`}>${item.cheese.price}</h3>
                                                {
                                                    item.percent_discount > 0 && (
                                                        <h3 className="price">${calculate_price(item.cheese.price, item.percent_discount)}</h3>
                                                    )
                                                }
                                                </div>
                                                
                                            </div>
                                            <div className="row two">
                                                <button className="remove" onClick={() => handleRemove(item._id)}>Remove</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="summary">
                                <h1>Summary</h1>
                                <div className="">
                                    <h4>Total</h4>
                                    <h3>${calculate_total()}</h3>
                                </div>
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