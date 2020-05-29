import React, { useContext, useEffect, useCallback } from 'react';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import { Store } from '../../store';
import GetZipCode from '../GetZipCode';
import Wrapper from '../../components/Wrapper';
import Content from '../../components/Content';
import Header from '../../components/Header';
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

export default function Index(props) {
    const [state] = useContext(Store),
          [fetchCheese, { called, loading, data }] = useLazyQuery(GET_CHEESE);

    const fetchCheeses = useCallback(
        () => {
            fetchCheese({ variables: { zip: state.zip } })
        }, [state.zip, fetchCheese]
    )

    useEffect(() => {
        document.title = "Frank's Fine Cheeses"

        if(state.zip) fetchCheeses()
    }, [state.zip, fetchCheeses])

    if(!state.zip) {
        return (
            <GetZipCode {...props} />
        )
    }

    return (
        <Wrapper>
            <Header />

            <Content>
                <div className="home">
                    {
                        loading && (
                            <div className="spinner"></div>
                        )
                    }
                    {
                        data && !loading && (
                            <div className="list">
                                {
                                    data.specials.map(item => (
                                        <Card
                                            key={item._id}
                                            data={item}
                                        />
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </Content>
        </Wrapper>
    )
}