import React from 'react';
import { RiCloseCircleLine, RiCheckboxCircleLine } from 'react-icons/ri';
import { BsFillCaretUpFill } from 'react-icons/bs';

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
                {
                    // if query has not been called don't display anything
                    props.called &&
                        props.data ?
                            props.data.specials.length > 0 ? (
                                <i className="valid"><RiCheckboxCircleLine /></i>
                            ) : (
                                <i className="invalid"><RiCloseCircleLine />
                                    <div className="dropdown">
                                        <div className="triangle"><BsFillCaretUpFill /></div>
                                        <p>Sorry, your location is not currently in our service area!</p>
                                    </div>
                                </i>
                            )
                            :
                            null
                }
                <button className={`submit${props.zipCode ? ' active' : ''}`} disabled={props.zipCode ? false : true}>Continue</button>
            </div>
            <p>Enter your zip code to find out which cheeses may be available near you.</p>
        </form>
    )
}