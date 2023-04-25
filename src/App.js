import axios from "axios";
import { useState } from "react";
import './App.css';

function App() {

  function handleSearch(event) {
    event.preventDefault();
    alert("Searching...");
  }

  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="App">

      <h1>React Photo Search</h1>

      <form>
        <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </form>


      
    </div>
  );
}

export default App;
