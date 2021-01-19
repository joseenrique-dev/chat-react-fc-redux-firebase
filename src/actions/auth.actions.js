import { auth, firestore } from 'firebase';

export const signup = ( user )=>{

    return async ( dispatch )=>{

        const db = firestore();
        auth()
            .createUserWithEmailAndPassword( user.email, user.password )
            .then( user =>{
                console.log('CreateUser-->', user);
            })
            .catch( err =>{
                console.log({error: err})
            })
    }
}