const INITIAL_STATE = {
    authData: [],

    
}



export default (state = INITIAL_STATE,action) =>{
    console.log("auth_action=>",action)
    switch (action.type){
        case "auth_Data":
            return({
                ...state,
                authData: action.data
            })
        default:
            return state
    }
}