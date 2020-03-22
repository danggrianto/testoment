import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';

import './header.scss';

export default class header extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home">Testoment</Navbar.Brand>
      </Navbar>
    );
  }
}
