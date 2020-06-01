import React from 'react';
import { RiCloseCircleLine, RiCheckboxCircleLine } from 'react-icons/ri';
import { BsFillCaretUpFill } from 'react-icons/bs';

// Display message letting user know if zip code is in service area or not
export default function Message(props) {
    return (
        <div className="message" data-id={props.data ? props.data.specials.length > 0 ? 'valid' : 'invalid' : ''}>
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
        </div>
    )
}