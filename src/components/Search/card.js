import React from 'react';
import { calculate_price } from '../../utils';

export default function Card(props) {
    return (
        <div className="card">
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
            <div className="">
            </div>
        </div>
    )
}