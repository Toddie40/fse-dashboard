import React, { Component } from 'react';
import { Route, Link, HashRouter as Router } from 'react-router-dom'
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

import logo from './logo-light.png';
import './App.scss';
import BR187 from './components/br187.component.js'
import Home from './components/home.component.js'
import About from './components/about.component.js'
import MergingFlow from './components/mergingflow.component'
import FileNameConvention from './components/filename.component';
import Features from './components/features.component';
import References from './components/references.component';

class App extends Component{
  constructor(props){
    super(props);
    this.modules = {}
    this.setModules()
  };

  //each modules is an array consisting of a class and a name (string)
  setModules(){
    this.modules= {
      home: [Home, "Home"],
      filenaming: [FileNameConvention, "File Naming"],
      br187: [BR187, "BR187"],
      mergingflow: [MergingFlow, "Merging Flow"],
      features: [Features, "Features"],
      about: [About, "About"],
      references: [References, "References"]
    }
  }

  navbar(){
    return (
    <Navbar variant="dark" className="navbar" expand="md">
      <Navbar.Brand as={Link} to="/Home">
        <img
          src={logo}
          height="40rem"
          alt="OFR Consultants"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/Home">Home</Nav.Link>
          <Nav.Link as={Link} to="/Features">Features</Nav.Link>
          <NavDropdown title="Modules" id="basic-nav-dropdown">
            <NavDropdown.Header>Implemented</NavDropdown.Header>
            <NavDropdown.Item as={Link} to="/File Naming">File Naming</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/BR187">BR187</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Header>Coming Soon</NavDropdown.Header>
            <NavDropdown.Item as={Link} to="/Merging Flow">Merging Flow</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/About">About</Nav.Link>
          <Nav.Link as={Link} to="/References" className="mr-sm-2">References</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>)
  }



  render() {
    let routes = [];
    for (let key in this.modules){
      let item = this.modules[key];
      routes.push(<Route path={"/"+item[1]} component={item[0]} />);
    }
      
    return (
      <div className="root">
        <Router>
          <div>
            {this.navbar()}
            <div className="container module-container mt-5 mx-auto">
                <Route exact path="/" component={Home}/>
                {routes}                            
            </div>
          </div>
        </Router>
      </div>
  );
};
};

export default App;
