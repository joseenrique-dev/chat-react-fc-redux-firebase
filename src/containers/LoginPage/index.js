import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout'
import Card from "../../components/UI/Card"
import { signin, isLoggedInUser } from '../../actions/auth.actions';
import './style.css';
import { Redirect } from 'react-router';

/**
* @author
* @function LoginPage
**/

const LoginPage = (props) => {

  const [ email,  setEmail] = useState('');
  const [ password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  
  useEffect(() => {
    dispatch(isLoggedInUser())
  }, [dispatch])
  const userLogin = e =>{
    e.preventDefault();

    // validations
    if(email === "") {
      console.log('Empty email');
      return
    }
    if(password === "") {
      console.log('Empty password');
      return
    }
    
    dispatch(
      signin( {email, password} )
    );
  }

  if( auth.authenticated ){
    return <Redirect to={'/'} />
  }
  return(
    <Layout>
      <div className="loginContainer">
        
        <Card>
        <h2 className="title-auth">Login to your Account</h2>
          <form onSubmit={userLogin} autoComplete="on">
            <div className="inp">
              <input type="text" placeholder="email@example.org" value={email} onChange={e => setEmail(e.target.value)}/>          
            </div>
            <div className="inp">
              <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="inp">
              <button type="submit">Login!!</button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
   )
  }


export default LoginPage