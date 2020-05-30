import React, { useState, useEffect, useCallback } from 'react';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import { RiSearchLine } from 'react-icons/ri';
import Card from './card';
import { debounce } from '../../utils';

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

const SEARCH = gql`
    query search($filter: String, $zip: String) {
        search(filter: $filter, zip: $zip) {
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
          [fetchCheese, { loading, data }] = useLazyQuery(GET_CHEESE, { variables: { zip: props.state.zip } }),
          [fetchSearch, { loading: searchLoading, data: searchData }] = useLazyQuery(SEARCH)

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
        query(event.target.value)
    }

    /**
     * 
     * @param {*} data 
     */
    const query = useCallback(
        debounce(value => {
            console.log(value, props.state.zip)
            fetchSearch({ variables: { filter: value, zip: props.state.zip } })
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