import React, { useEffect, useState, useCallback } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Form from './form';
import { debounce } from '../../utils';

const GET_CHEESES = gql`
    query specials($zip: String) {
        specials(filter: $zip) {
            _id
            cheese {
                _id
                name
                country
                price
            }
            zip
            percent_discount
            out_of_stock
        }
    }
`;

export default function GetZipCode() {
    const [zipCode, setZipCode] = useState(""),
          [fetchCheeses, { called, loading, data }] = useLazyQuery(GET_CHEESES)

    useEffect(() => {
        document.title = `Where are you located?`;
    }, [])

    /**
     * Verify is zip code is in service area
     * 
     * @param {String} value
     */
    const verify = useCallback(
        // debounce zip code input
        debounce(async (value) => {
            fetchCheeses({ variables: { zip: value } })
        }, 400), []
    )

    /**
     * Handle Zip Code OnChange
     * 
     * @param {*} event
     * @param {String} value // contains zip code
     */
    function handleZipChange(event) {
        let { value } = event.target

        setZipCode(value)
        verify(value)
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

    if(called) {
        console.log(data)
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