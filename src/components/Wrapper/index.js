import React, { useContext } from 'react';
import { Store } from '../../store';

/*
 * Created this for reusability as it will be used for every view component.
 * Adding no-scroll class removes scroll while basket model is open
 */
export default function Wrapper(props) {
    const [state] = useContext(Store);
    return (
        <div className={`wrapper${state.basket_visibility ? ' no-scroll' : ''}`}>
            { props.children }
        </div>
    )
}