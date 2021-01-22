import { userConstants } from '../actions/constants';

const initialState = {

}

export default (state = initialState, action) =>{
    switch (action) {
        case `${userConstants.GET_REALTIME_USERS}_REQUEST`:
            return {
                ...state
            };
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