"use client";

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../api/graphql/mutations';
import { UserInput, UserOutput } from '@/types/DBTypes';

const Register: React.FC = () => {
  let [input, setInput] = useState<UserInput>({
    user_name: "",
    password: "",
  });
  const [registerUser, { loading, error }] = useMutation<{ register: UserInput }>(REGISTER_USER);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('input data before sending:', input)
    try {
      const { data } = await registerUser({ variables: { user: input } });
      console.log('User registered:', data?.register);
      // Optionally, redirect to another page or show a success message
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error, show error message, etc.
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred! Please try again.</p>;

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={input.user_name}
            onChange={(e) => setInput({ ...input, user_name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value})}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;