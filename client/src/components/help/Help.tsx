import * as React from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './help.scss'

export default (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Chess Knight Challenge
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Don't worry, using this app is really easy. If you've come all the way here,
          you're probably wondering what . I know, I've had the same doubt before.
        </p>
        <h4>
          Steps:
        </h4>
        <p>
          1) Click any cell. You should promptly be able to see the highlighted squares in
          < className="teal">teal</>
        (yes, that's a color name).
        </p>
      <p>2) There's no second step!</p>
      </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
    </Modal >
  );
}
