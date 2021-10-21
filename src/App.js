import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York"/>
        <footer>
          This project was coded by <a href="https://www.linkedin.com/in/flávia-caiafa-mól-00595bb1/" target="_blank" rel="noreferrer">Flávia Mól</a> and is open-sourced on{" "}
          <a href="https://github.com/Flaviamol/weather-react-final-project" target="_blank" rel="noreferrer" >GitHub</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
