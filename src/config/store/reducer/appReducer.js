
const INITIAL_STATE = {
    DonarData: []

}



export default (state = INITIAL_STATE, action) => {
    console.log("app_action=>", action)
    switch (action.type) {
        case "Donar_Data":
            return ({
                ...state,
                DonarData: action.data
            })
        default:
            return state
    }
}