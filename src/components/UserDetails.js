import React from 'react';

const UserDetails = (props) => {
    return (
        <div>
            <p className="mb-0 pb-0">Gender : &nbsp;{props.user.gender}</p>
            <p className="mb-0 pb-0">Cell No : &nbsp;{props.user.phone}</p>
            <p className="mb-0 pb-0">DOB : &nbsp;{new Date(props.user.dob.date).toDateString()}</p>
        </div>
    )
};

export default UserDetails;