// src/components/UserProfilePopup.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import UserIcon from '../images/user-icon.png';
const UserProfilePopup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className='nav-notification btn btn-light p-0 mb-0'>
      <img
        src={UserIcon}
        alt="User"
        onClick={handleShow}
        style={{ cursor: 'pointer', width: '30px', height: '30px' }}
      />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <img
              src={UserIcon}
              alt="User"
              className="img-fluid rounded-circle mb-3"
              style={{ width: '100px', height: '100px' }}
            />
            <h4>John Doe</h4>
            <p>johndoe@example.com</p>
            <p>Some additional user information can go here.</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Save Changes</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserProfilePopup;
