import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { username, password };
    const response = await fetch('https://sfbportal.azurewebsites.net/api/Accounts/authenticate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const json = await response.json();
    console.log(json); // handle response from server here
  }

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .login-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #f5f5f5;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
        }
        label {
          display: block;
          margin-bottom: 10px;
        }
        input {
          margin-left: 10px;
          padding: 5px;
          border: none;
          border-radius: 3px;
          box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
        }
        button {
          margin-top: 10px;
          padding: 5px 10px;
          border: none;
          border-radius: 3px;
          background-color: #0070f3;
          color: white;
          font-size: 16px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0062cc;
        }
      `}</style>
    </div>
  );
}

export default Login;