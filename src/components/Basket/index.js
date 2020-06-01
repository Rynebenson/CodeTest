import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import Card from './card';
import Summary from './summary';

export default function Basket(props) {
    /**
     * Remove the item from basket
     * 
     * @param {Integer} index 
     */
    function handleItemRemoval(obj) {
        props.dispatch({ type: "REMOVE_FROM_BASKET", payload: obj });
    }

    /**
     * Close the basket modal
     */
    function closeBasketModal() {
        props.dispatch({ type: "UPDATE_BASKET_VISIBILITY", payload: false })
    }

    return (
        <div className={`basket${props.state.basket_visibility ? ' visible' : ''}`}>
            <div className="container">
                <div>
                    <h1>Basket</h1>
                    <button className="close" onClick={() => closeBasketModal()}><RiCloseLine /></button>
                </div>
                {
                    /*
                     * Display the items of our basket
                     *     - if 0 items, display empty message
                     */
                    props.state.basket.length > 0 ? (
                        <div className="contents">
                            <div className="list">
                                {
                                    props.state.basket.map((item, index) => (
                                        <Card
                                            key={index}
                                            id={item._id}
                                            name={item.cheese.name}
                                            country={item.cheese.country}
                                            price={item.cheese.price}
                                            percent_discount={item.percent_discount}
                                            handleItemRemoval={handleItemRemoval}
                                        />
                                    ))
                                }
                            </div>
                            <Summary 
                                sum={props.state.sum}
                            />
                        </div>
                    ) : (
                        <p className="empty-message">
                            Your basket is empty. 
                            <br /><br/>
                            Get started by adding some cheeses!
                        </p>
                    )
                }
            </div>
        </div>
    )
}