import "./App.css";
import { Container } from "semantic-ui-react";
import {
  Route,
  Routes,
} from "react-router-dom";

import {About, Calendar, Home, Login} from './pages';
import Navbar from "./components/Navbar";

function App() {

  return (
    <Routes>
      <Container>
      <Navbar/>
      <Route exact path = '/' element ={<Home/>} />
      <Route exact path = '/login' element ={<Login/>} />
      <Route exact path = '/about' element ={<About/>} />
      <Route exact path = '/calendar' element ={<Calendar/>} />
      </Container>
    </Routes>
  );
}

export default App;
