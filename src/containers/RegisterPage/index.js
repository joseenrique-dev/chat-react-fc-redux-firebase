import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import { signup } from '../../actions/index'
import '../LoginPage/style.css';


/**
* @author
* @function RegisterPage
**/

const RegisterPage = (props) => {
  const [ firstName,  setFirstName] = useState('');
  const [ lastName,  setLastName] = useState('');
  const [ email,  setEmail] = useState('');
  const [ password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onRegister = ( e )=>{
    e.preventDefault();
    dispatch(
      signup(
        firstName,
        lastName,
        email,
        password)
      );
  }
  return(
    <Layout>
      <div className="registerContainer">
        <Card>
          <form onSubmit={ onRegister } >
          <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}/>          
          <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}/>          
          <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>          
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>          
          <div>
            <button>Register !!</button>
          </div>
          </form>
        </Card>
      </div>
    </Layout>
   )
  }


export default RegisterPage