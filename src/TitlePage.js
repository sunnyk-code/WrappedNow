import React from 'react';

const TitlePage = ({ onLogin }) => {
  return (
    <div className="title-page">
      <h1>Wrapped Now</h1>
      <button onClick={onLogin}>Login to Spotify</button>
    </div>
  );
};

export default TitlePage;
