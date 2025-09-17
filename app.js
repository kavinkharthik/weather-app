import React, { useState } from 'react';
import './styles/App.css';
import SearchBar from './components/SearchBar';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Debug log
  console.log('App component rendered');
  console.log('Current state:', { weatherData, isLoading, error });

  const handleSearch = async (location) => {
    try {
      setIsLoading(true);
      setError('');
      
      // Get API key from environment variables
      const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
      
      if (!API_KEY || API_KEY === 'your_openweathermap_api_key') {
        throw new Error('Please add your OpenWeatherMap API key in the .env file');
      }
      
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&units=metric&appid=${API_KEY}`;
      
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error('City not found. Please try another location.');
      }
      
      const data = await response.json();
      
      // Transform the API response to our app's format
      setWeatherData({
        city: data.name,
        country: data.sys.country,
        temperature: `${Math.round(data.main.temp)}°C`,
        feelsLike: `${Math.round(data.main.feels_like)}°C`,
        description: data.weather[0].description,
        humidity: `${data.main.humidity}%`,
        windSpeed: `${(data.wind.speed * 3.6).toFixed(1)} km/h`,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        timestamp: new Date().toLocaleTimeString()
      });
      
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      console.error('Error fetching weather data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>Weather Forecast App</h1>
          <p className="app-description">Search for a city to see the current weather conditions</p>
        </header>
        
        <div className="search-container">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
          {error && <p className="error-message">{error}</p>}
        </div>
        
        {weatherData && (
          <div className="weather-display">
            <h2>Current Weather in {weatherData.city}, {weatherData.country}</h2>
            <div className="weather-main">
              <div className="weather-icon">
                <img src={weatherData.icon} alt={weatherData.description} />
              </div>
              <div className="weather-primary">
                <p className="temperature">{weatherData.temperature}</p>
                <p className="description">{weatherData.description}</p>
              </div>
            </div>
            <div className="weather-details">
              <div className="detail-item">
                <span className="detail-label">Feels Like</span>
                <span className="detail-value">{weatherData.feelsLike}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Humidity</span>
                <span className="detail-value">{weatherData.humidity}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Wind</span>
                <span className="detail-value">{weatherData.windSpeed}</span>
              </div>
            </div>
            <div className="weather-timestamp">
              Last updated: {weatherData.timestamp}
            </div>
          </div>
        )}
        
        <footer className="app-footer">
          <p>Weather App © {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
