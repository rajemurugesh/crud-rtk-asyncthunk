import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './components/navbar';
import Create from './components/create';
import Read from "./components/read";
import Update from "./components/update";
import './App.css';

function App() {
  return (
    <div> 
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Create />} />
      <Route exact path="/read" element={<Read />} />
      <Route exact path="/edit/:id" element={<Update />} />
    </Routes>
    </BrowserRouter>
    

      {/* <h1 className="text-3xl text-white-400 font-bold underline">
      Hello world!
    </h1> */}
    
    </div>
    
  );
}

export default App;
