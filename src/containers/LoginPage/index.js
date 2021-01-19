import React, { useState } from 'react'
import Layout from '../../components/Layout'
import './style.css';
import Card from "../../components/UI/Card"

/**
* @author
* @function LoginPage
**/

const LoginPage = (props) => {

  const [ email,  setEmail] = useState('');
  const [ password, setPassword] = useState('');

  return(
    <Layout>
      <div className="loginContainer">
        <Card>
          <form>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>          
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>          
            <div>
              <button type="submit">Login !!</button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
   )
  }


export default LoginPage