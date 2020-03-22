import React, {Component} from 'react';
import './projects.scss';
import ListGroup from 'react-bootstrap/ListGroup';

export default class projects extends Component {
  render() {
    return (
      <div className="page-projects container">
        <h1>Projects</h1>
        <ListGroup className="projects-list">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}
