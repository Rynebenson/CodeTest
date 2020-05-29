import React from 'react';
import { calculate_price, format_price } from '../../utils';

export default function Card(props) {
    return (
        <div className="card">
            <div className="row top">
                <div>
                    <h1 className="title">{props.data.cheese.name}</h1>
                    <h2 className="country">{props.data.cheese.country}</h2>
                </div>
                <div>
                    
                    <h3 className="price">${calculate_price(props.data.cheese.price, props.data.percent_discount)}</h3>
                    <h4 className="actual_price">${props.data.cheese.price}</h4>
                </div>
            </div>
        </div>
    )
}