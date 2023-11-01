import "./App.css";
import Create from "./components/create";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./components/read";
import Update from "./components/update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;