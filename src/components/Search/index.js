import React, { useState, useEffect, useCallback } from 'react';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import { RiSearchLine } from 'react-icons/ri';
import Card from './card';
import { debounce } from '../../utils';

const GET_CHEESE = gql`
    query specials($filter: String, $zip: String) {
        specials(filter: $filter, zip: $zip) {
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
          [fetchCheese, { loading, data }] = useLazyQuery(GET_CHEESE)

    /**
     * Get initial list of cheeses
     * 
     * @param {String} props.state.zip
     */
    useEffect(() => {
        fetchCheese({ variables: { filter: props.state.zip } })
    }, [fetchCheese, props.state.zip])

    /**
     * Handle Search Change
     * 
     * @param {*} event
     */
    function handleSearchChange(event) {
        setSearch(event.target.value)
        query(event.target.value)
    }

    /**
     * 
     * @param {*} data 
     */
    const query = useCallback(
        debounce(value => {
            fetchCheese({ variables: { filter: value, zip: props.state.zip } })
        }, 500), []
    )

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
                {
                    loading && (
                        <div className="loader">
                            <div className="spinner"></div>
                        </div>
                    )
                }
            </div>
            <div className="results">
                {
                    data &&
                    data.specials && !loading &&
                        data.specials.length > 0 ? 
                            data.specials.map(special => (
                                <Card
                                    key={special._id}
                                    state={props.state}
                                    data={special}
                                    addToBasket={addToBasket}
                                />
                            ))
                            : (
                                 <p className="no-results">
                                    We could not find what you were looking for. 
                                    <br/>
                                    <br />
                                    Try searching by name or country! It's possible what you're looking for is out of stock.
                                </p>
                            )
                }
            </div>
        </div>
    )
}