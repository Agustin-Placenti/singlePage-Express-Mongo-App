import { useState } from "react";
import Nav from "./components/Nav";
import AddVideoGame from "./pages/AddVideoGame/AddVideoGame";
import Dashboard from "./pages/dashboard/Dashboard";
import {
  Routes,
  Route,
} from "react-router-dom";
import "./App.scss"

function App() {
  const [addSuccessfully, setAddSuccessfully] = useState(false);

  const handleAddSucessfully = (value: boolean) => {
    setAddSuccessfully(value);
  }

  return (
    <div className="pages">
      <Nav></Nav>
      <div className="section">
        <div className="columns">
          <Routes>
            <Route path="/videogames/add" element={<AddVideoGame handleAddSucessfully={handleAddSucessfully} />}/>
            <Route path="/" element={<Dashboard addSuccessfully={addSuccessfully} handleAddSucessfully={handleAddSucessfully}/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;