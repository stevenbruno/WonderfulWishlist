import React, { useState, useEffect } from 'react';
import Header from './Components/header/header';

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
      <Header />
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
