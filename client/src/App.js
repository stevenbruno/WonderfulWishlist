import React, { useState, useEffect } from 'react';
import Header from './Components/header/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/home/home';
import Login from './Components/login/login';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      let response = await fetch('/users');
      let data = await response.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route
            path="/users"
            render={() => (
              <div>
                <h1>Users</h1>
                <ul>
                  {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                  ))}
                </ul>
              </div>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
