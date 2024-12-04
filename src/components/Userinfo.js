import React from 'react';
import './Dashboard.css';

function Userinfo({ user }) {
    const{name, email, role, profilePic} = user;
    return(
        <div>
            <div className='info-container'>
                <img src={profilePic} alt={name} className='image'/>
                <p className='name'>Name: {name}</p>
                <p className='email'>Email: {email}</p>
                <p className='role'>Role: {role}</p>
            </div>
        </div>
    );
}

export default Userinfo;