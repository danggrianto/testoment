import React, {Component} from 'react';
import './projects.scss';

import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';

export default class projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_API_URL + '/projects')
      .then(response => this.setState({projects: response.data}));
  }

  renderProjects = () => {};

  render() {
    return (
      <ListGroup className="projects-list">
        {this.state.projects.map(project => (
          <ListGroup.Item key={project._id}>{project.name}</ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}
