import "./App.css";
import Page from "./pages/Page";
import { Routes, Route } from "react-router-dom";

import { About, Calendar, Contact, Home, Login } from "./pages";
import OurTeam from "./pages/OurTeam/OurTeam";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Page content={<Home />} />} />
      <Route exact path="/login" element={<Page content={<Login />} />} />
      <Route exact path="/about" element={<Page content={<About />} />} />
      <Route exact path="/calendar" element={<Page content={<Calendar />} />} />
      <Route exact path="/OurTeam" element={<Page content={<OurTeam />} />} />
      <Route exact path="/Contact" element={<Page content={<Contact />} />} />
    </Routes>
  );
}

export default App;
