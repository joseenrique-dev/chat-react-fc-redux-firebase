import React from 'react'

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <div>
        <header>
            {props.children}
        </header>
    </div>

   )
  }


export default Layout