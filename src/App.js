
import './App.css';
import { Image } from "./components/Image";
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Bookmarks from './components/Bookmarks';

function App() {



  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Image/>} />
          <Route path="/bookmarks" element={<Bookmarks/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
