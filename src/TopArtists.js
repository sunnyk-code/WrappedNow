import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopArtists = ({ accessToken }) => {
    const [topArtists, setTopArtists] = useState([]);
  
    useEffect(() => {
      // Make the API request when the component mounts
      const fetchTopArtists = async () => {
        try {
          const response = await axios.get(
            'https://api.spotify.com/v1/me/top/artists',
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
  
          // Handle the response data and set it to state
          setTopArtists(response.data.items);
        } catch (error) {
          console.error('Error fetching top artists:', error);
        }
      };
  
      fetchTopArtists();
    }, [accessToken]);
  
    if (topArtists.length === 0) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h2>Top Artists</h2>
        <ul>
          {topArtists.map((artist) => (
            <li key={artist.id}>{artist.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TopArtists;