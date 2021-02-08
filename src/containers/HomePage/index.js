import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRealtimeConversations, getRealTimeUsers, updateMessage } from '../../actions';
import Layout from '../../components/Layout';
import UserList from '../UserList';
import './style.css';

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user);
    const [ chatStarted, setChatStarted ] = useState(false);
    const [ chatUser, setChatUser ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ userUid, setUserUid ] = useState(null);
    let unsubscribe = useRef(null);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        if( messagesEndRef.current ){
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(scrollToBottom);

    useEffect(() => {
        unsubscribe.current = dispatch(getRealTimeUsers( auth.uid ))
        .then((unsubscribeRealTime) => unsubscribeRealTime)
        .catch(err => {
            console.log('Error::', err);
        });  
    }, [auth, dispatch]);

    useEffect(() => {
        
        return () => {
            //cleanUp
            unsubscribe.current
            .then(f => f())
            .catch(err =>console.log('Err:',err));
        }
    }, [])

    const initChat = (user) =>{
        setChatUser(`${ user.firstName } ${ user.lastName }`);
        setChatStarted(true);
        setUserUid( user.uid );
        
        dispatch(getRealtimeConversations({ uid_1: auth.uid, uid_2: user.uid }));
    }
    

    const submitMessage = () =>{
        const msgObj = {
            user_uid1: auth.uid,
            user_uid2: userUid,
            message
        }
        console.log(msgObj);

        if( message !== "" ){
            dispatch( updateMessage(msgObj) )
            .then(() =>{
                setMessage("");
                
            })
        }
    }
    
    const onPress = ( e ) =>{
        
        if(e.key === "Enter"){
            submitMessage();
        }
    }


  return(
    <Layout>
      <section className="container">
        <div className="listOfUsers">
        {
            user.users.length > 0 ?
                user.users.map((user)=>{
                    
                    return (
                        <UserList 
                            onClick={initChat}
                            key={user.uid} 
                            user={user} 
                        />
                    )
                }) : null
        }
                    
        </div>
        <div className="chatArea">
            <div className="chatHeader"> 
            {
                chatStarted ?
                chatUser :
                null
            }
            </div>
            <div className="messageSections">
            {
                chatStarted ?
                user.conversations.map(con =>
                    <div style={{ textAlign: con.user_uid1 === auth.uid ? 'right' : 'left' }}>
                        <p className="messageStyle" >{con.message}</p>
                        <div ref={messagesEndRef} id="bb"/>
                    </div>
                )
                 :
                null
            }
            </div>
            {
                chatStarted ?
                <div className="chatControls" >
                    <textarea 
                        value={ message }
                        onChange={(e)=>setMessage(e.target.value)}
                        placeholder='Write a Message...'
                        onKeyPress={onPress}
                    />
                    <button onClick={submitMessage}>Send</button>
                </div> :
                null

            }
        </div>
      </section>
    </Layout>
   )
  }


export default HomePage