import './App.css';
import DisplayName from "./DisplayName"
//passig functions as props
const alertName =(name)=>{
  alert('Hi ' + name)
}
function App() {
  return (

    <div className="App">
      <header className="App-header">
        <DisplayName name="Pratim" alertName={alertName}/>
      </header>
    </div>
  );
}

export default App;
