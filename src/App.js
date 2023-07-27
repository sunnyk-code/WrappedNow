import React, { useEffect, useState } from 'react';
import './App.css';
import TitlePage from './TitlePage';
import HomePage from './HomePage';

function App() {
  const CLIENT_ID = "f01165f1cab34ad79ca133515ee2bd16";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const SCOPE = "user-top-read user-read-recently-played";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState(null); // Initialize token to null

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    // Only set the token state if it exists, otherwise it will show the TitlePage
    if (token) {
      setToken(token);
    }

  }, []);

  const handleLogin = () => {
    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPE)}`;
  };

  const handleLogout = () => {
    setToken(null); // Reset token to null on logout
    window.localStorage.removeItem("token");
  };

  return (
    <div className="App">
      <header className="App-header">
        {token ? (
          <HomePage />
        ) : (
          <TitlePage onLogin={handleLogin} />
        )}
      </header>
    </div>
  );
}

export default App;
