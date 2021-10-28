import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London"/>
        <footer>
          This project was coded by <a href="https://www.linkedin.com/in/flávia-caiafa-mól-00595bb1/" target="_blank" rel="noreferrer">Flávia Mól</a>, is open-sourced on{" "}
          <a href="https://github.com/Flaviamol/weather-react-final-project" target="_blank" rel="noreferrer" >GitHub</a> and hosted on <a href="https://thirsty-fermat-670a95.netlify.app" target="_blank" rel="noreferrer">Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
