import React from 'react';
import { calculate_price } from '../../utils';
import { RiShoppingBasketLine, RiCheckLine } from 'react-icons/ri';

// Display the special
export default function Card(props) {
    return (
        <div className={`card${props.out_of_stock ? ' disabled' : ''}`}>
            <div className="row top">
                <div>
                    <h1 className="title">{props.cheese.name}</h1>
                    <h2 className="country">{props.cheese.country}</h2>
                </div>
                <div className="">
                    <h3 className={`price${props.percent_discount > 0 ? ' discounted' : ''}`}>${(props.cheese.price.toFixed(2))}</h3>
                    {
                        props.percent_discount > 0 && (
                            <h3 className="price">${calculate_price(props.cheese.price, props.percent_discount).toFixed(2)}</h3>
                        )
                    }
                </div>
            </div>
            <div className="row two">
                {
                    /*
                     * If out of stock display out of stock message
                     * If in stock, display add to basket button
                     *    - if whitelist includes id, it has already been added
                     *      so disable button and display appropriate message
                     */
                    props.out_of_stock ? (
                        <p className="outOfStockMessage">Out of Stock</p>
                    ) : (
                        <button className={`button${props.whitelist.includes(props.id) ? ' active' : ''}`} onClick={() => props.addToBasket({ _id: props.id, cheese: props.cheese, percent_discount: props.percent_discount })}>
                            {
                                props.whitelist.includes(props.id) ? (
                                    <div className="container">
                                        <i><RiCheckLine /></i>
                                        <span>Added To Basket</span>
                                    </div>
                                ) : (
                                    <div className="container">
                                        <i><RiShoppingBasketLine /></i>
                                        <span>Add To Basket</span>
                                    </div>
                                )
                            }
                        </button>
                    )
                }
            </div>
        </div>
    )
}