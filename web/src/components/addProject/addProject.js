import React, {Component} from 'react';

import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import './addProject.scss';

export default class addProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: null,
    };
  }
  toggleModal = () => {
    this.setState({show: !this.state.show});
  };
  handleChange = event => {
    this.setState({name: event.target.value});
  };
  handleSave = () => {
    axios
      .post(process.env.REACT_APP_API_URL + '/project', {
        name: this.state.name,
      })
      .then(function(response) {
        this.toggleModal();
        console.log(response);
      })
      .catch(function(error) {
        console.error(error);
      });
  };
  render() {
    return (
      <div className="component-add-project">
        <Button className="addBtn" variant="success" onClick={this.toggleModal}>
          Add Project
        </Button>

        <Modal show={this.state.show} onHide={this.toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Project Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Project's Name"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="closeBtn"
              variant="secondary"
              onClick={this.toggleModal}>
              Close
            </Button>
            <Button
              className="saveBtn"
              variant="primary"
              onClick={this.handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
