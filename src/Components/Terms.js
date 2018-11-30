import React from 'react'
import { Button, Header, Icon, Modal, Checkbox,Form } from 'semantic-ui-react'

const Submit = () => (
  <Modal trigger={<Form.Checkbox label='I agree to the Terms and Conditions' />} basic size='small' closeIcon>
    <Header icon='fire icon' content='You trying to get Lit?!?!?!?' />
    <Modal.Content>
      <p>
        Must Agree to getting lit
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted>
        <Icon name='remove' /> No
      </Button>
      <Button color='green' inverted>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
)

export default Submit
