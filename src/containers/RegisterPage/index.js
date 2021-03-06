import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import { signup } from '../../actions/index'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../LoginPage/style.css';


/**
* @author
* @function RegisterPage
**/

const RegisterPage = (props) => {
  const [ firstName, setFirstName] = useState('');
  const [ lastName, setLastName] = useState('');
  const [ email, setEmail] = useState('');
  const [ password, setPassword ] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const onRegister = ( e )=>{
    e.preventDefault();
    
    dispatch(
      signup(
        { firstName,
          lastName,
          email,
          password
        }
        )
      );
  }

  if( auth.authenticated ){
    return <Redirect to={'/'} />
  } 
  return(
    <Layout>
      <div className="registerContainer">
        <Card>
          <h2 className="title-auth">Create your Account</h2>
          <form onSubmit={ onRegister } >
            <div className="inp">
              <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}/>          
            </div>
            <div className="inp">
              <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}/>          
            </div>
            <div className="inp">
              <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="inp">
              <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="inp">
              <button>Register !!</button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
   )
  }


export default RegisterPage