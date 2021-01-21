import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import './style.css'


/**
* @author
* @function Header
**/

const Header = (props) => {
  const auth = useSelector(state=> state.auth);

  return(
    <header className="header">
        <div style={{display: 'flex'}}>
          <div className="logo">Web Messenger</div>
          {
            !auth.authenticated ?
              <ul className="leftMenu">
                <li><NavLink to={'/login'}>Login</NavLink></li>
                <li><NavLink to={'/signup'}>Sign up</NavLink></li>
              </ul> : null 
          }
            
        </div>
        {
          auth.authenticated ?
            <div style={{margin: '20px 0', color: '#fff', fontWeight: 'bold'}}>
              Hi `${auth.firstName} ${auth.lastName}`
            </div> : null
        }
        <ul className="menu">
          <li>
            {
              auth.authenticated ?
                <Link to={'#'} onClick={() => {
                  //doing something...
                }}>Logout</Link> : null
            }
          </li> 
        </ul>
    </header>
   )
  }


export default Header