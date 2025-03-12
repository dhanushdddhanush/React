import React, { useState, useEffect } from 'react';
import { api } from '../Service/api';

const Jokes = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
 
  const fetchNewJoke = async () => {
    setLoading(true);
    try {
      const data = await api.getRandomJoke();
      setJoke(data);
    } catch (error) {
      console.error('Failed to fetch joke:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewJoke();
  }, []);

  return (
    <div className="jokes-container">
      <h1>Programming Jokes</h1>
      
      {loading ? (<div>Loading...</div>) : (
        <div className="joke-card">
          {joke.type === 'single' ? (
            <p>{joke.joke}</p>
          ) : (
            <>
              <p>{joke.setup}</p>
              <p className="punchline">{joke.delivery}</p>
            </>
          )}
        </div>
      )}
      
      <button onClick={fetchNewJoke} className="fetch-button">
        Get Another Joke
      </button>
    </div>
  );
};

export default Jokes;