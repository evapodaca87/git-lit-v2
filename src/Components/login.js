import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

const Login = () => (
    <Segment inverted>
        <Form inverted>
            <Form.Group widths='equal'>
                
                <Form.Input type="email" label='Email' placeholder='joe@schmoe.com' />
                <Form.Input type="password" label='Password' placeholder='Password' />
            </Form.Group>
            <Button type='submit'>Submit</Button>
        </Form>
    </Segment>
);
export default Login;