import React, { useState } from 'react';

export default function SignupCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

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
        <label htmlFor="password2">Confirm Password</label>
        <input
          name="password2"
          placeholder="Confirm password"
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <button className="primarybtn" type="button">
          Sign up
        </button>
      </form>
    </>
  );
}
