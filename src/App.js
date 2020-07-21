import React, { useContext } from 'react';
import './App.css';
import 'hover.css/css/hover.css';
import UserDirectory from './containers/UserDirectory/UserDirectory';
import { UserContext } from './context';

const App = (props) => {
  const userContext = useContext(UserContext);
  const { loading, search, error } = userContext;
  return (
    <div className="App">
      <div className="container">
        <h2 className="app-name p-2">Random User Directory</h2>
        {loading && <i>Fetching Users from API...</i>}
        {error && <p className="p-2 mb-2 bg-danger text-white">Something went wrong !</p>}
        <UserDirectory></UserDirectory>
      </div>
    </div>
  );
}

export default App;
