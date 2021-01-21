import { auth, firestore } from 'firebase';
// import { useDispatch } from 'react-redux';
import { authConstants } from './constants';

export const signup = (user) => {    

    return async (dispatch) => {

        const db = firestore();
        dispatch({
            type: `${authConstants.USER_LOGIN}_REQUEST`
        })
        auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(data => {
            
            const currentUser = auth().currentUser;
            const name = `${user.firstName} ${user.lastName}`;
            currentUser.updateProfile({
                displayName: name
            })
            .then(() => {
                //if you are here means it is updated successfully
                db.collection('users')
                .doc(data.user.uid)
                .set({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    uid: data.user.uid,
                    createdAt: new Date(),
                    isOnline: true
                })
                .then(() => {
                    //succeful
                    const loggedInUser = {
                        firstName: user.firstName,
                        lastName: user.lastName,
                        uid: data.user.uid,
                        email: user.email
                    }
                    localStorage.setItem('user', JSON.stringify(loggedInUser));
                    console.log('User logged in successfully...!');
                    dispatch({
                        type: `${authConstants.USER_LOGIN}_SUCCESS`,
                        payload: {user:loggedInUser}
                    })
                })
                .catch(error => {
                    console.log(error);
                    dispatch({
                        type: `${authConstants.USER_LOGIN}_FAILURE`,
                        payload: {error}
                    });
                });
            });
        })
        .catch(error => {
            console.log(error);
        })


    }


}