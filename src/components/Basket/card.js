import React from 'react';
import { calculate_price } from '../../utils';

// display the basket item
export default function Card(props) {
    return (
        <div className="item">
            <div className="row one">
                <div>
                    <h1 className="name">{props.name}</h1>
                    <h2 className="country">{props.country}</h2>
                </div>
                <div>
                    {/* if discount, adding discounted class will add styles  */}
                    <h3 className={`price${props.percent_discount > 0 ? ' discounted' : ''}`}>${props.price.toFixed(2)}</h3>
                    {
                        // if discount, show discounted price
                        props.percent_discount > 0 && (
                            <h3 className="price">${calculate_price(props.price, props.percent_discount).toFixed(2)}</h3>
                        )
                    }
                </div>                                  
            </div>
            <div className="row two">
                {/* 
                  *  Passing price and percent_discount to item removal allows us to easily 
                  *  calculate sum in reducer after removal
                  */}
                <button className="remove" onClick={() => props.handleItemRemoval({ _id: props.id, price: props.price, percent_discount: props.percent_discount })}>Remove</button>
            </div>
        </div>
    )
}