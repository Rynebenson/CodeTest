import Cookies from "universal-cookie"

export const Reducer = (state, action) => {
    let cookies = new Cookies()

    switch(action.type) {
        case "UPDATE_ZIP":
            cookies.set("zip", action.payload)
            return { ...state, zip_code: action.payload }
        default:
            return state;
    }
}