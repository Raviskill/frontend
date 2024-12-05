
import './App.css';
import Hello from './compontens/Hello';

function App() {

  const name = "THis is react"


  return (
    <div className="App">

      <Hello A={name}/>
      
       
    </div>
  );
}

export default App;
