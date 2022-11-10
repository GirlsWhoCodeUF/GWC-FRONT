import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import About from "./pages/About/About";
import Calendar from "./pages/Calendar/Calendar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={Home} />
        <Route exact path="/login" element={Login} />
        <Route exact path="/about" element={About} />
        <Route exact path="/calendar" element={Calendar} />
        <Route>
          <Navigate to="/" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
