import {React,useState} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import  './App.css'

import {
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from "react-bootstrap";

function App() {
const [count,SetCount] = useState(0)

  return (
    <div>
      <Router>
        <Container >
          <Navbar className="border-bottom">
            <Navbar.Brand>Campk12</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link"  to="/contact">
                  Contact
                </Link>
                <Link className="nav-link" to="/contact/abc">
                Abcd
              </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
            <h1> {count} </h1>
            <button onClick={()=>{ SetCount(count-1) }} >Decrease</button>

            <button onClick={()=>{ SetCount(count+1) }}>Increase</button>

          <Route path="/" exact />

         <Route path="/about" component={About} />
         <Route path="/contact"  component={Contact} />

          



        </Container>
      </Router>
    </div>
  );
}

export default App;
