import { Component } from "react";

import './ContactModal.css'
import PostForm from "./PostForm";
import { Modal } from "react-bootstrap";

class ContactModal extends Component {
  render() {
    return (
      <Modal show={this.props.open} onHide={this.props.handleClose} dialogClassName="modal-90w" fullscreen>
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PostForm />
        </Modal.Body>
      </Modal>
    )
  }
}

export default ContactModal