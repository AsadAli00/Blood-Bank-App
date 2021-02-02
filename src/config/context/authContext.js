import React from 'react'
// import auth from '../Reducer/authReducer/auth'

const InitialState = {}

const authContext = React.createContext(InitialState,()=> {});

export default authContext;
