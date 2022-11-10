import "./App.css";
import { Container } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import {About, Calendar, Home, Login,Contact} from './pages';

function App() {
  return (
    <Routes>
      <Container>
      <Navbar/>
      <Route exact path = '/' element ={<Home/>} />
      <Route exact path = '/login' element ={<Login/>} />
      <Route exact path = '/about' element ={<About/>} />
      <Route exact path = '/calendar' element ={<Calendar/>} />
      <Route exact path = '/contact' element ={<Contact/>} />
      </Container>
    </Routes>
  );
}

export default App;
