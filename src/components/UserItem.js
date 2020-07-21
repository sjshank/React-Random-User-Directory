import React, { useState } from 'react';
import UserDetails from './UserDetails';


const UserItem = (props) => {
    const { name, email, location, picture } = props.user;
    const [showInfo, setShowInfo] = useState(false);
    const toggleMoreInfo = () => {
        setShowInfo(!showInfo);
    }
    return (
        <>
            <div className="user-item-section mb-3 hvr-grow-shadow">
                <div className="row">
                    <div className="col-2">
                        <img src={picture.large} alt="Avatar" className="avatar-img-Cls"></img>
                    </div>
                    <div className="col-7">
                        <ul className="user-item-ul">
                            <li><h4><strong>{name.title + ' '}{name.first + ' '}{name.last}</strong></h4></li>
                            <li><p className="mb-0 pb-0">{email}</p></li>
                            <li><p className="mb-0 pb-0">{location.city},{' ' + location.country}</p></li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <div className="pt-2">
                            <a href onClick={toggleMoreInfo} className="showInfo-cls">{showInfo ? 'Collapse' : 'Expand'}</a>
                        </div>
                    </div>
                </div>
                {showInfo && <UserDetails user={props.user}></UserDetails>}
            </div>
        </>
    )
};

export default UserItem;