import { userConstants } from './constants'
import { firestore } from 'firebase';

export const getRealTimeUsers = ( uid ) =>{
    
    return async dispatch =>{
        dispatch({
            type: `${userConstants.GET_REALTIME_USERS}_REQUEST`
        });

        const db = firestore();
        const unsubscribe = db.collection("users")
        //.where("uid", "!=", uid)
        .onSnapshot((querySnapshot) => {
            const users = [];
            querySnapshot.forEach(function(doc) {
                if(doc.data().uid !== uid){
                    users.push(doc.data());
                }
            });
            console.log('USERS-->',users);

            dispatch({ 
                type: `${userConstants.GET_REALTIME_USERS}_SUCCESS`,
                payload: { users }
            });

        });

        return unsubscribe;
    }
}

export const updateMessage = (message) =>{

    return async dispatch=>{
        const db = firestore();
        db.collection('conversations')
            .add({
                ...message,
                isView:false,
                createdAt: new Date()
            })
            .then((data)=>{
                console.log('UpdateMsg Action', data);
                
            })
            .catch(err=> console.log('Error', err))

    }
}

export const getRealtimeConversations = ( user ) =>{
    console.log('getRealtimeConversations-->', user)
    return async dispatch =>{
        const db = firestore();
        db.collection('conversations')
            .where('user_uid1','in',[user.uid_1,user.uid_2])
            .orderBy('createdAt','asc')
            .onSnapshot((querySnapshot) => {
                
                console.log('what with querySnapshot value::', querySnapshot);
                const conversations = [];
                querySnapshot.forEach(( doc ) =>{
                    if(
                        (doc.data().user_uid1 === user.uid_1 && doc.data().user_uid2 === user.uid_2)
                        || 
                        (doc.data().user_uid1 === user.uid_2 && doc.data().user_uid2 === user.uid_1)
                    ){
                        conversations.push(doc.data())
                    }
                })

                if( conversations.length > 0 ){
                    dispatch({
                        type: userConstants.GET_REALTIME_MESSAGE,
                        payload: { conversations }
                    });
                }else{
                    dispatch({
                        type: `${userConstants.GET_REALTIME_MESSAGE}_FAILURE`,
                        payload: { conversations }
                    });
                }
                console.log('Conversation from getConversation', conversations);
            });
    }
}