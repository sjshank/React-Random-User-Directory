import React, { useContext } from 'react';
import UserSearch from '../../components/UserSearch';
import UserList from '../../components/UserList';
import { UserContext } from '../../context';

const UserDirectory = (props) => {
    const userContext = useContext(UserContext);
    const { loading, error } = userContext;
    return (
        <>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    {!error && !loading &&
                        <div><UserSearch></UserSearch>
                            <UserList></UserList></div>}
                </div>
                <div className="col-3"></div>
            </div>
        </>
    );
}

export default UserDirectory;