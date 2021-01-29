import './App.css';
import DisplayName from "./DisplayName"

function App() {
  return (
    //Pass and receive Props
    
    <div className="App">
      <header className="App-header">
      <DisplayName name="Pratim" age="21"/>
      <DisplayName name="Kabir" age="22"/>
      <DisplayName name= "Rohan" age="21">
        <h1>I am from mumbai</h1>
      </DisplayName>
      </header>
    </div>
  );
}

export default App;
