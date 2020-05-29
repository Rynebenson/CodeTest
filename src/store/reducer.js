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
            console.log(action.payload);
            return state;
        default:
            return state;
    }
}