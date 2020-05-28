import React, { createContext, useReducer, useEffect } from "react"
import { Reducer } from "./reducer"
import Cookies from "universal-cookie"

const initialState = {
    zip: null
}

export const Store = createContext()

export default (props) => {
    const [state, dispatch] = useReducer(Reducer, initialState),
          cookies = new Cookies(),
          zip = cookies.get("zip");

    useEffect(() => {
        async function checkZip() {
            console.log('checkZip is called')

            if(zip) {
                console.log(zip); return
            }
        }

        checkZip()
    }, [zip])

    return (
        <Store.Provider value={[state, dispatch]}>
            { props.children }
        </Store.Provider>
    )
}