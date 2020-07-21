import React, { useReducer, useState, useEffect } from 'react';

const UserContext = React.createContext(null);

const userStateReducer = (userState, action) => {
    switch (action.type) {
        case 'SEND':
            return {
                ...userState,
                loading: true,
                error: null
            }
        case 'RESPONSE':
            return {
                fUsers: action.users.slice(0),
                oUsers: action.users.slice(0),
                loading: false,
                error: null
            }
        case 'ERROR':
            return {
                ...userState,
                loading: false,
                error: action.errMsg
            }
        case 'SEARCH':
            const _oUsers = userState.oUsers;
            let filteredArr = [];
            if (!action.searchText || action.searchText === '') {
                filteredArr = [..._oUsers];
            } else {
                filteredArr = _oUsers.filter((_user) => {
                    return action.searchText && _user.name.first && _user.name.last && (_user.name.first.toLowerCase().indexOf(action.searchText.toLowerCase()) > -1 || _user.name.last.toLowerCase().indexOf(action.searchText.toLowerCase()) > -1);
                });
            }
            return {
                ...userState,
                fUsers: filteredArr
            }
        default:
            return {
                ...userState
            }
    }
}

const UserContextProvider = (props) => {
    const [userState, dispatchUserStateAction] = useReducer(userStateReducer, { oUsers: [], fUsers: [], loading: false, error: null })

    useEffect(() => {
        const fetchUsers = () => {
            dispatchUserStateAction({ type: 'SEND' });
            fetch("https://randomuser.me/api/?results=20")
                .then((resp) => {
                    return resp.json();
                })
                .then((response) => {
                    dispatchUserStateAction({ type: 'RESPONSE', users: response.results });
                })
                .catch(err => {
                    dispatchUserStateAction({ type: 'ERROR', errMsg: err.message });
                    console.log(err);
                })
        }
        fetchUsers();
    }, []);

    const handleSubmit = (e, sText) => {
        dispatchUserStateAction({ type: 'SEARCH', searchText: sText });
    }

    return (
        <UserContext.Provider value={{
            users: userState.fUsers,
            loading: userState.loading,
            error: userState.error,
            onHandleSubmit: handleSubmit
        }}>
            {props.children}
        </UserContext.Provider>
    );
};

export { UserContext, UserContextProvider };