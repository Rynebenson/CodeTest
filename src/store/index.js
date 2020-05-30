import React, { createContext, useReducer, useEffect } from "react"
import { Reducer } from "./reducer"
import Cookies from "universal-cookie"

const initialState = {
    loading: true,
    zip: null,
    basket: [],
    whitelist: [],
    basket_visibility: false,
    sum: 0
}

export const Store = createContext()

export default (props) => {
    const [state, dispatch] = useReducer(Reducer, initialState),
          cookies = new Cookies(),
          zip = cookies.get("zip");

    /**
     * Check for zip code in cookies
     * 
     *     - If found, set the zip code in global store
     *     - If not found, set loader to false
     * 
     * @param {String} zip
     * 
     */
    useEffect(() => {
        async function checkZip() {
            if(zip) {
                dispatch({ type: "UPDATE_ZIP", payload: zip }); return;
            }

            dispatch({ type: "UPDATE_LOADING", payload: false })
        }

        checkZip()
    }, [zip])

    // React, by design, will render initially before we can get the zip from cookies.
    // Using a loader here will stop our application from rendering the following routes
    // while we check for zip code in cookies.
    if(state.loading) return <div></div>
    return (
        <Store.Provider value={[state, dispatch]}>
            { props.children }
        </Store.Provider>
    )
}