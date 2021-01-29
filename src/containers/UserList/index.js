import React from 'react'

export default function UserList( props ) {
    const { user, onClick } = props;
    

    return (
        <div className="displayName" onClick={ ()=> onClick( user ) }>
            <div className="displayPic">
                <img src="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" alt="" />
            </div>
            <div style={{margin: '0 10px', display:'flex',flex:1, justifyContent:'space-between'}}>
                <span style={{fontWeight: 500}}>{user.firstName} {user.lastName}</span>
                <span>{user.isOnline ? 'online' : 'offline'}</span>
            </div>
        </div>
    )
}
