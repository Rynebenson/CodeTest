import React, { useContext, useEffect } from 'react';
import { Store } from '../../store';
import Wrapper from '../../components/Wrapper';
import GetZipCode from '../GetZipCode';
import Header from '../../components/Header';

export default function Index(props) {
    const [state] = useContext(Store)

    useEffect(() => {
        document.title = "Frank's Fine Cheeses"
    }, [])

    if(!state.zip) {
        return (
            <GetZipCode {...props} />
        )
    }

    return (
        <Wrapper>
            <Header />
        </Wrapper>
    )
}