import React, { useEffect, useState } from 'react';
import Form from './form';
import { debounce } from '../../utils';

export default function GetZipCode() {
    const [zipCode, setZipCode] = useState("");

    useEffect(() => {
        document.title = `Where are you located?`;
    }, [])

    /**
     * Handle Zip Code OnChange
     * 
     * 
     */
    function handleZipChange(event) {
        let { value } = event.target;

        setZipCode(value)

        debounce(async (value) => {
            
        })
    }

    /**
     * Handle Form Submission
     * 
     * @param {*} event 
     */
    async function handleSubmit(event) {
        event.preventDefault()

        alert('submit')
    }

    return (
        <div className="zipcode">
            <div className="portal">
                <div className="row">
                    <img src={require("../../assets/images/FFC_logo_1.png")} alt="Frank's Fine Cheeses" />
                    <h1>Frank's Fine Cheeses takes local sourcing to the next level!</h1>
                </div>
                <Form 
                    zipCode={zipCode}
                    handleZipChange={handleZipChange}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}