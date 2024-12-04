import React from 'react';

function stats({stats})
{
    return(
        <div className='stats'>
        <h2>Statistics</h2>
            <p> Total Users: {stats.totalUsers} </p>
            <p> Active Users: {stats.activeUsers} </p>
            <p>New Sign-ups: {stats.newSignups} </p>
                <div>
                    <label>Active Users: </label>
                    <progress value={stats.activePercentage} max="100">
                        {stats.activePercentage}%
                    </progress>
                </div>
        </div>
    );
}
export default stats;