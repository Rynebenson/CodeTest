import React, { useContext } from 'react';
import { Store } from '../../store';

export default function Wrapper(props) {
    const [state] = useContext(Store);
    return (
        <div className={`wrapper${state.basket_visibility ? ' no-scroll' : ''}`}>
            { props.children }
        </div>
    )
}