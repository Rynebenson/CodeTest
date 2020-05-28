import React, { createContext, useReducer, useEffect } from "react"
import { Reducer } from "./reducer"
import Cookies from "universal-cookie"

const initialState = {
    loading: true,
    zip: null
}

export const Store = createContext()

export default (props) => {
    const [state, dispatch] = useReducer(Reducer, initialState),
          cookies = new Cookies(),
          zip = cookies.get("zip");

    useEffect(() => {
        async function checkZip() {
            console.log(zip)

            if(zip) {
                dispatch({ type: "UPDATE_ZIP", payload: zip }); return;
            }

            dispatch({ type: "UPDATE_LOADING", payload: false })
        }

        checkZip()
    }, [zip])

    if(state.loading) return <div></div>
    return (
        <Store.Provider value={[state, dispatch]}>
            { props.children }
        </Store.Provider>
    )
}