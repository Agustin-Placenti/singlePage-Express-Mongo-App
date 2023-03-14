import Nav from "./Nav";
import AddVideoGame from "./AddVideoGame";
import SeeVideoGame from "./SeeVideoGame";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="section">
        <div className="columns">
          <Routes>
            <Route path="/videogames/add" element={<AddVideoGame />}/>
            <Route path="/videogames/see" element={<SeeVideoGame />}/>
            <Route path="/" element={<SeeVideoGame />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;