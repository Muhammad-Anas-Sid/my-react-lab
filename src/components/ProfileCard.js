import React from 'react';

function ProfileCard(props)
{
    const{name, age, occupation, location} = props;
    return(
        <div className="card">
            <h1>My Profile Card</h1>
            <hr></hr>
            <p className='name'> {name} </p>
            <p className='info'> {age} years old.</p>
            <p className='info'> {occupation} </p>
            <p className='locate'> Lives in {location} </p>
        </div>
    );
}
export default ProfileCard;