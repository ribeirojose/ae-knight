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
          Welcome to the Knight Challenge!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          If you've come all the way here, you were probably wondering what would be the
          available positions for a chess knight in <b>n</b> turns (<i>where <b>n</b> is a natural number</i>).
          I know, I've had the same doubt before. But hey! You're in the right place!
        </p>
        <h4>
          Steps:
        </h4>
        <p>
          1) Click any cell. You should promptly be able to see the highlighted squares in
           <span className="teal">&nbsp;teal&nbsp;</span>
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
