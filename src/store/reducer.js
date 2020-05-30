import Cookies from "universal-cookie"
import { calculate_price } from "../utils"

export const Reducer = (state, action) => {
    let cookies = new Cookies(),
        s;

    switch(action.type) {
        case "UPDATE_ZIP":
            cookies.set("zip", action.payload)
            return { ...state, zip: action.payload, loading: false }
        case "UPDATE_LOADING":
            return { ...state, loading: action.payload }
        case "ADD_TO_BASKET":
            s = state.sum + calculate_price(action.payload.cheese.price, action.payload.percent_discount)

            return { 
                ...state, 
                basket: [action.payload, ...state.basket], 
                whitelist: [action.payload._id, ...state.whitelist],
                sum: s
            }
        case "REMOVE_FROM_BASKET":
            let clone = state.basket.filter(item => item._id !== action.payload._id);
            let whitelist_clone = state.whitelist.filter(item => item !== action.payload._id)
            s = state.sum - calculate_price(action.payload.cheese.price, action.payload.percent_discount)
            
            return { 
                ...state, 
                basket: clone, 
                whitelist: whitelist_clone,
                sum: s
            }
        case "UPDATE_BASKET_VISIBILITY":
            return { ...state, basket_visibility: action.payload }
        default:
            return state;
    }
}