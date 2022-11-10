import "./App.css";
import {
  Route,
  Routes,
} from "react-router-dom";

import {About, Calendar, Home, Login} from './pages';

function App() {

  return (
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/calendar" element={<Calendar/>} />
      </Routes>
  );
}

export default App;
