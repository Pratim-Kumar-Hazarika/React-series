import './App.css';
import { DisplayAge, DisplayName, CityName } from "./DisplayName";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <DisplayName/>
      <DisplayAge/>
      <CityName/>
      </header>
    </div>
  );
}

export default App;
