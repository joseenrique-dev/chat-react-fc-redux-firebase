import { authConstants } from '../actions/constants';

const initialState = {
    firstName:'',
    lastName:'',
    email:'',
    authenticating:false,
    authenticated:false,
    error:null
}

export default (state = initialState, action) =>{
    console.log('REDUCER-->', action);

    switch (action.type) {
        //Auth case
        case `${authConstants.USER_LOGIN}_REQUEST`:
            return {
                ...state,
                authenticating: true
            };
        case `${authConstants.USER_LOGIN}_SUCCESS`:
            
            return {
                ...state,
                ...action.payload.user,
                authenticating: false,
                authenticated:true
            };
        case `${authConstants.USER_LOGIN}_FAILURE`:
            return {
                ...state,
                authenticating:false,
                authenticated:false,
                error: action.payload.error
            }
        //LogOutCase
        case `${authConstants.USER_LOGOUT}_REQUEST`:
            return;
        case `${authConstants.USER_LOGOUT}_SUCCESS`:
            
            return {
                ...initialState
            };
        case `${authConstants.USER_LOGOUT}_FAILURE`:
            return {
                ...state,
                error: action.payload.error
            }
        default:{
            return state;
        }
    }
}