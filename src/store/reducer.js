import Cookies from "universal-cookie"
import { calculate_price } from "../utils"

export const Reducer = (state, action) => {
    let cookies = new Cookies(),
        basket_clone,
        whitelist_clone,
        s;

    switch(action.type) {
        case "UPDATE_ZIP":
            cookies.set("zip", action.payload)
            return { 
                ...state, 
                zip: action.payload, 
                loading: false 
            }
        case "UPDATE_LOADING":
            return { 
                ...state, 
                loading: action.payload 
            }
        case "ADD_TO_BASKET":
            basket_clone = [action.payload, ...state.basket]
            whitelist_clone = [...state.whitelist, action.payload._id]
            s = state.sum + calculate_price(action.payload.cheese.price, action.payload.percent_discount)

            return { 
                ...state, 
                basket: basket_clone, 
                whitelist: whitelist_clone,
                sum: s
            }
        case "REMOVE_FROM_BASKET":
            basket_clone = state.basket.filter(item => item._id !== action.payload._id);
            whitelist_clone = state.whitelist.filter(item => item !== action.payload._id)
            s = state.sum - calculate_price(action.payload.price, action.payload.percent_discount)
            
            return { 
                ...state, 
                basket: basket_clone, 
                whitelist: whitelist_clone,
                sum: s
            }
        case "UPDATE_BASKET_VISIBILITY":
            return { 
                ...state, 
                basket_visibility: action.payload 
            }
        default:
            return state;
    }
}