const auth_Data = (data) => {
    return (dispatch)=>{
        dispatch({type:"auth_Data", data: data})
    }
}
const Donar_Data = (data) => {
    return (dispatch)=>{
        dispatch({type:"Donar_Data", data: data})
    }
}




export{
    auth_Data,
    Donar_Data
}