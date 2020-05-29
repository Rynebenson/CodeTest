import Cookies from "universal-cookie"

export const Reducer = (state, action) => {
    let cookies = new Cookies()

    switch(action.type) {
        case "UPDATE_ZIP":
            cookies.set("zip", action.payload)
            return { ...state, zip: action.payload, loading: false }
        case "UPDATE_LOADING":
            return { ...state, loading: action.payload }
        case "ADD_TO_BASKET":
            return { ...state, basket: [action.payload, ...state.basket], whitelist: [action.payload._id, ...state.whitelist] }
        case "REMOVE_FROM_BASKET":
            let clone = state.basket.filter(item => item._id !== action.payload);
            let whitelist_clone = state.whitelist.filter(item => item !== action.payload)
            
            return { ...state, basket: clone, whitelist: whitelist_clone }
        default:
            return state;
    }
}