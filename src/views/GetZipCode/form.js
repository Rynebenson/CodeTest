import React from 'react';

export default function Form(props) {
    return (
        <form className="form" onSubmit={props.handleSubmit}>
            <div className="input">
                <input
                    type="text"
                    name="zipCode"
                    value={props.zipCode}
                    onChange={props.handleZipChange}
                    autoComplete="off"
                />
                <button className="submit">Continue</button>
            </div>
            <p>Enter your zip code and find out what cheese and discounts may be available to you.</p>
        </form>
    )
}