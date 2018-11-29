import React, { Component } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'

class Submit extends Component {
  state = { open: false }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  close = () => this.setState({ open: false })

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state

    return (
      <div>
        <Form.Checkbox label='I agree to the Terms and Conditions' onClick={this.closeConfigShow(false, true)} />


        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header icon='fire icon' content='You trying to get Lit?!?!?!?'>You trying to get Lit?!?!?!?'<i class="fire icon"></i></Modal.Header>
          <Modal.Content>
            <p>You Must agree to getting LIT</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              No
            </Button>
            <Button
              onClick={this.close}
              positive
              labelPosition='right'
              icon='checkmark'
              content='Yes'
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default Submit
