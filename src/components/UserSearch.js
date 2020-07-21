import React, { useContext, createRef } from 'react';
import { UserContext } from '../context';

const UserSearch = (props) => {
    const userContext = useContext(UserContext);
    const { onHandleSubmit } = userContext;
    const inputRef = createRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        onHandleSubmit(e, inputRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className=" ml-0 m-3">
                <div className="d-flex">
                    <input type="text"
                        className="form-control"
                        placeholder="Enter your search"
                        ref={inputRef}></input>
                    <button type="submit" className="ml-2 btn">Search</button>
                </div>
            </form>
        </div>
    );
}

export default UserSearch;