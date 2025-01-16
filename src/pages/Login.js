import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Unesite email" />
        <label>Lozinka:</label>
        <input type="password" placeholder="Unesite lozinku" />
        <button type="submit">Prijavi se</button>
      </form>
    </div>
  );
};

export default Login;
