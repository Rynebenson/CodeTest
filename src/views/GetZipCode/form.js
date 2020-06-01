import React from 'react';
import Message from './message';

// Display the form to capture user's zip code
export default function Form(props) {
    return (
        <form className="form" onSubmit={props.handleSubmit}>
            <div className="input">
                <input
                    type="text"
                    name="zipCode"
                    value={props.zipCode}
                    onChange={props.handleZipChange}
                    placeholder="Zip Code"
                    autoComplete="off"
                />
                <Message
                    {...props}
                />
                <button id="submit" className={`submit${props.zipCode ? ' active' : ''}`} disabled={props.zipCode ? false : true}>Continue</button>
            </div>
            <p>Enter your zip code to find out which cheeses may be available near you.</p>
        </form>
    )
}