import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import { RiSearchLine } from 'react-icons/ri';
import Card from './card';

const GET_CHEESE = gql`
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

export default function Search(props) {
    const [search, setSearch] = useState(""),
          [fetchCheese, { loading, data }] = useLazyQuery(GET_CHEESE, { variables: { zip: props.state.zip } });

    useEffect(() => {
        fetchCheese()
    }, [fetchCheese])

    /**
     * Handle Search Change
     * 
     * @param {*} event
     */
    function handleSearchChange(event) {
        setSearch(event.target.value)
    }

    /**
     * Handle add to basket button click
     * 
     * @param {Object} item
     */
    function addToBasket(data) {
        if(props.state.whitelist.includes(data._id)) return
        
        props.dispatch({ type: "ADD_TO_BASKET", payload: data });
    }

    return (
        <div className="search">
            <div className="input">
                <i><RiSearchLine /></i>
                <input
                    type="text"
                    name="search"
                    placeholder="Search Frank's Fine Cheeses"
                    value={search}
                    onChange={handleSearchChange}
                    autoComplete="off"
                />
            </div>
            <div className="results">
                {
                    loading && (
                        <div className="spinner"></div>
                    )
                }
                {
                    !loading && data &&
                        data.specials.map(special => (
                            <Card
                                key={special._id}
                                state={props.state}
                                data={special}
                                addToBasket={addToBasket}
                            />
                        ))
                }
            </div>
        </div>
    )
}