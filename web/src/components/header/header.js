import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import './header.scss';

export default class header extends Component {
  render() {
    return (
      <Navbar
        bg="dark"
        expand="lg"
        variant="dark"
        className="justify-content-between">
        <Navbar.Brand href="#home">Testoment</Navbar.Brand>
        <Button variant="success">Add Project</Button>
      </Navbar>
    );
  }
}
