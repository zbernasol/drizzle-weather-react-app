import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather currentCity="Toronto" />
      </div>
      <div>
        <footer>
          <a href="https://github.com/zbernasol/drizzle-weather-react-app">Open-source code</a> by <a href="https://www.linkedin.com/in/zian-angelica-bernasol-6a190a113/">Zian Bernasol</a>
      </footer>
      </div>
    </div>
  );
}
export default App;
