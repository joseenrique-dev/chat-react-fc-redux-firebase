import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { logout } from '../../actions/auth.actions'
import './style.css'


/**
* @author
* @function Header
**/

const Header = (props) => {
  const auth = useSelector(state=> state.auth);
  const dispatch = useDispatch();
  const logOut = () =>dispatch(logout())
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
        <div style={{margin: '20px 0', color: '#fff', fontWeight: 'bold'}}>
          {auth.authenticated ? `Hi ${auth.firstName} ${auth.lastName}` : ''}
        </div>
        
        <ul className="menu">
          <li>
            {
              auth.authenticated ?
                <Link to={'#'} onClick={logOut}>Logout</Link> : null
            }
          </li> 
        </ul>
    </header>
   )
  }


export default Header