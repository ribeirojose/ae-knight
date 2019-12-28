import * as React from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './help.scss'

class Help extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
    }
  }
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2 ? 3 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  previousButton = () => {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <Button
          className="btn btn-secondary"
          onClick={this._prev}>
          Previous
      </Button>
      )
    }
    return null;
  }

  nextButton = () => {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <Button
          className="btn btn-primary float-right"
          onClick={this._next}>
          Next
      </Button>
      )
    }
    return null;
  }

  exitButton = () => {
    let currentStep = this.state.currentStep;
    if (currentStep === 3) {
      return (
        (<Button className="btn btn-primary float-right"

          onClick={this.props.onHide}>Play!</Button>)
      )
    }
    return null;
  }


  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
      >
        <Modal.Header closeButton={this.props.onHide}>
          <Modal.Title>
            Welcome to Knight Turns!
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <React.Fragment>
            <Step1
              currentStep={this.state.currentStep}
            />
            <Step2
              currentStep={this.state.currentStep}
            />
            <Step3
              currentStep={this.state.currentStep}
            />
          </React.Fragment>
        </Modal.Body>
        <Modal.Footer>
          {this.previousButton()}
          {this.nextButton()}
          {this.exitButton()}
        </Modal.Footer>
      </Modal >
    );
  }
}

const Step1 = (props) => {
  if (props.currentStep !== 1) {
    return null
  }
  return (
    <React.Fragment>
      <p>
        If you've come all the way here, you were probably wondering what would be the
          available positions for a chess knight in <b>2</b> turns. These doubts pop now and then, I get it.
And people around us might not be so friendly when we let these questions out to them, huh?
      </p>
      <p>
        But hey, no one is going to judge you here, so you're in the right place!
     You'll be able to play around with our Chess Board freely and lightly as you wish.
      </p>
      <p>
        Let's just take a step back and make it all clear, shall we?
      </p>
    </React.Fragment>
  );
}

const Step2 = (props) => {
  if (props.currentStep !== 2) {
    return null
  }
  return (
    <React.Fragment>
      <h4>
        Remembering knight moves in Chess
      </h4>
      <p>
        Chess is a two-player strategy board game played on a chessboard, a checkered game board
        with 64 squares arranged in an 8x8 grid.
      </p>
      <p>
        Given a positioned knight, it can move either:
        <ol type="A">
          <li>
            2 squares horizontally and 1 square vertically, or
          </li>
          <li>
            2 squares vertically and 1 square horizontally.
          </li>
        </ol>
      </p>
    </React.Fragment>
  );
}

const Step3 = (props) => {
  if (props.currentStep !== 3) {
    return null
  }
  return (
    <React.Fragment>
      <h4>
        Steps to use this app
        </h4>
      <ol type="1">
        <li>Click any square on the board. We have translated the knight rules to an algorithm that
          will process what would be the valid positions for the knight in two turns, given the selected position. </li>
        <li>
          You should promptly be able to see the highlighted squares in
           teal. Yes, that's the color in the "Play!" button ;-).
        </li>
        <li>There's no third step! Ready to play?</li>
      </ol>
    </React.Fragment>

  );
}

export default Help
