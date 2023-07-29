import React, { useState, useEffect } from 'react';
import TopArtists from './TopArtists';

const HomePage = () => {
  const [topArtists, setTopArtists] = useState([]);
  const accessToken = window.localStorage.getItem("token")

  useEffect(() => {
    // Implement the logic to fetch the user's top artists here using the Spotify Web API
    // For simplicity, we'll use dummy data for now
    const dummyTopArtists = [
      {
        id: '1',
        name: 'Artist 1',
        imageUrl: 'https://dummyimage.com/100x100/1db954/ffffff',
      },
      {
        id: '2',
        name: 'Artist 2',
        imageUrl: 'https://dummyimage.com/100x100/1db954/ffffff',
      },
      // ... (dummy data for other artists)
    ];

    setTopArtists(dummyTopArtists);
  }, []);

  return (
    <div className="home-page">
      <h1>Your Top 5 Artists</h1>
      <TopArtists accessToken={accessToken} />
    </div>
  );
};

export default HomePage;
