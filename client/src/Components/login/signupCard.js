import React, { useState } from 'react';
import axios from 'axios';

export default function SignupCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h1>Sign up</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder="Email@domain.com"
          type="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="primarybtn"
          type="button"
          onClick={() =>
            axios
              .post('/users/register', {
                email,
                password,
              })
              .then(
                (response) => {
                  console.log(response);
                },
                (error) => {
                  console.log(error);
                }
              )
          }
        >
          Sign up
        </button>
      </form>
    </>
  );
}
