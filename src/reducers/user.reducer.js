import { userConstants } from '../actions/constants';

const initialState = {
    users: [],
}

export default (state = initialState, action) =>{
    
    console.log('Reducer users-->', {state, action})
    //GET_REALTIME_USERS_SUCCESS
    switch (action.type) {
        case `${userConstants.GET_REALTIME_USERS}_REQUEST`:
            return {
                ...state
            }
        case `${userConstants.GET_REALTIME_USERS}_SUCCESS`:
            return {
                ...state,
                users: action.payload.users
            };        
    
        default:{
            return {
                ...state
            }
        }
    }
}