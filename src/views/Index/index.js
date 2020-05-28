import React, { useContext } from 'react';
import { Store } from '../../store';
import Wrapper from '../../components/Wrapper';
import GetZipCode from '../GetZipCode';

export default function Index() {
    const [state] = useContext(Store)

    if(!state.zip) {
        return (
            <GetZipCode />
        )
    }

    return (
        <Wrapper>
            <div className="index">
                <h1>{state.zip}</h1>
            </div>
        </Wrapper>
    )
}