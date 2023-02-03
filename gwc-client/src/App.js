import "./App.css";
import Page from "./pages/Page";
import {
  Route,
  Routes,
} from "react-router-dom";

import {About, Calendar, Home, Login} from './pages';

function App() {

  return (
      <Routes>
        <Route exact path="/" element={<Page content={<Home />}/>} />
        <Route exact path="/login" element={<Page content={<Login/>}/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/calendar" element={<Calendar/>} />
      </Routes>
  );
}

export default App;
