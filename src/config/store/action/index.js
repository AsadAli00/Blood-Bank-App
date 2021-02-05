const auth_Data = (data) => {
    return (dispatch)=>{
        dispatch({type:"auth_Data", data: data})
    }
}



export{
    auth_Data
}