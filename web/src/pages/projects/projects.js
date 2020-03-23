import React, {Component} from 'react';
import './projects.scss';

import Projects from '../../components/projects';
import AddProject from '../../components/addProject';

export default class projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page-projects page-container">
        <div className="d-flex justify-content-between">
          <h1>Projects</h1>
          <AddProject />
        </div>
        <Projects className="projects-list" />
      </div>
    );
  }
}
