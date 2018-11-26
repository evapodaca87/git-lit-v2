import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

const SignUp = () => (
    <Segment inverted>
        <Form inverted>
            <Form.Group widths='equal'>
                <Form.Input fluid label='First name' placeholder='First name' />
                <Form.Input fluid label='Last name' placeholder='Last name' />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Input type="email" label='Email' placeholder='joe@schmoe.com' />
                <Form.Input label='UserName' placeholder='joe89' />

            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Input type="password" label='Password' placeholder='Password' />
                <Form.Input type="password" label='Confirm Password' placeholder='Password' />
            </Form.Group>
            <Form.Checkbox label='I agree to the Terms and Conditions' />
            <Button type='submit'>Submit</Button>
        </Form>
    </Segment>
);
export default SignUp;
