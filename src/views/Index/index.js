import React, { useContext, useEffect } from 'react';
import { Store } from '../../store';
import GetZipCode from '../GetZipCode';
import Wrapper from '../../components/Wrapper';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Search from '../../components/Search';
import Basket from '../../components/Basket';

export default function Index(props) {
    const [state, dispatch] = useContext(Store)

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
            <Content>
                <Search 
                    state={state}
                    dispatch={dispatch}
                />
                <Basket 
                    state={state}
                    dispatch={dispatch}
                />
            </Content>
            <Footer />
        </Wrapper>
    )
}