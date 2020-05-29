import React from 'react';
import { calculate_price } from '../../utils';
import { RiShoppingBasketLine } from 'react-icons/ri';

export default function Card(props) {
    return (
        <div className={`card${props.data.out_of_stock ? ' disabled' : ''}`}>
            <div className="row top">
                <div>
                    <h1 className="title">{props.data.cheese.name}</h1>
                    <h2 className="country">{props.data.cheese.country}</h2>
                </div>
                <div className="">
                    <h3 className={`price${props.data.percent_discount > 0 ? ' discounted' : ''}`}>${props.data.cheese.price}</h3>
                    {
                        props.data.percent_discount > 0 && (
                            <h3 className="price">${calculate_price(props.data.cheese.price, props.data.percent_discount)}</h3>
                        )
                    }
                </div>
            </div>
            <div className="row two">
                {
                    props.data.out_of_stock ? (
                        <p className="outOfStockMessage">Out of Stock</p>
                    ) : (
                        <button className={`button${props.state.whitelist.includes(props.data._id) ? ' active' : ''}`} onClick={() => props.addToBasket(props.data)}>
                            <i><RiShoppingBasketLine /></i>
                            <span>Add To Basket</span>
                        </button>
                    )
                }
            </div>
        </div>
    )
}