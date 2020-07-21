import React, { useContext } from 'react';
import UserItem from './UserItem';
import { UserContext } from '../context';

const UserList = (props) => {
    const userContext = useContext(UserContext);
    const { users } = userContext;
    return (
        <>
            {users.length > 0 && users.map((u) => {
                return <UserItem key={u.login.uuid} user={u}></UserItem>
            })}
            {users.length < 1 && 
            <div class="p-2 mb-2 bg-warning text-dark">No records found.</div>}
        </>
    );
};

export default UserList;