# Weather Forecast Application

A modern, responsive weather application built with React that provides current weather conditions and a 5-day forecast for any location worldwide.

## 🌟 Features

- **Current Weather**: View detailed current weather conditions including temperature, humidity, wind speed, and more.
- **5-Day Forecast**: Get a 5-day weather forecast with daily high/low temperatures and conditions.
- **Responsive Design**: Works on desktop, tablet, and mobile devices.
- **Beautiful UI**: Clean, modern interface with smooth animations and transitions.
- **Location Search**: Search for weather by city name.
- **Error Handling**: User-friendly error messages for invalid locations or API issues.

## 🛠 Technologies Used

- **React** - Frontend library for building user interfaces
- **CSS3** - Styling with custom properties and modern layout techniques
- **OpenWeatherMap API** - For weather data
- **React Icons** - For weather and UI icons

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key (free tier available at [OpenWeatherMap](https://openweathermap.org/api))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```
   REACT_APP_OPENWEATHERMAP_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```
   The application will open in your default browser at `http://localhost:3000`

## 🏗 Project Structure

```
weather-app/
├── public/               # Static files
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── SearchBar.jsx # Search functionality
│   │   ├── WeatherCard.jsx # Current weather display
│   │   └── ForecastCard.jsx # 5-day forecast
│   ├── styles/           # CSS files
│   ├── utils/            # Utility functions
│   │   └── api.js        # API integration
│   ├── App.jsx           # Main application component
│   └── index.jsx         # Application entry point
├── .env                  # Environment variables
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

## 📝 Usage

1. Enter a city name in the search bar and press Enter or click the Search button
2. View the current weather conditions and 5-day forecast
3. The application will automatically load weather for London on first visit

## 🌐 API Reference

This application uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. You'll need to sign up for a free API key to use the application.
   ```
   cd weather-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- Enter a location in the search bar and click the search button to retrieve the weather forecast.
- The application will display the weather conditions, temperature, and an icon representing the weather for the specified location.

## License

This project is licensed under the MIT License.