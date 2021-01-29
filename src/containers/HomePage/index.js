import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRealTimeUsers } from '../../actions';
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
    let unsubscribe;

    useEffect(() => {
        unsubscribe = dispatch(getRealTimeUsers( auth.uid ))
        .then(unsubscribe => unsubscribe)
        .catch(err => {
            console.log('Error::', err);
        });  
    }, []);

    useEffect(() => {
        
        return () => {
            //cleanUp
            unsubscribe
            .then(f => f())
            .catch(err =>console.log('Err:',err));
        }
    }, [])

    const initChat = (user) =>{
        setChatUser(`${ user.firstName } ${ user.lastName }`);
        setChatStarted(true);
    }
  return(
    <Layout>
      <section className="container">
        <div className="listOfUsers">
        {
            user.users.length > 0 ?
                user.users.map((user)=>{
                    console.log('USER-->', user);
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
                <div style={{ textAlign: 'left' }}>
                    <p className="messageStyle" >Hello User</p>
                </div> :
                null
            }
            </div>
            {
                chatStarted ?
                <div className="chatControls">
                    <textarea />
                    <button>Send</button>
                </div> :
                null

            }
        </div>
      </section>
    </Layout>
   )
  }


export default HomePage