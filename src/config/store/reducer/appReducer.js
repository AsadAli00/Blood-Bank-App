  
const INITIAL_STATE = {
    appName: "Blood Bank APP"
    
}



export default (state = INITIAL_STATE,action) =>{
    console.log("app_action=>",action)
    return state;
}