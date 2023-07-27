import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [topArtists, setTopArtists] = useState([]);

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
      <div className="artists-container">
        {topArtists.map(artist => (
          <div key={artist.id} className="artist-card">
            <img src={artist.imageUrl} alt={artist.name} />
            <p>{artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
