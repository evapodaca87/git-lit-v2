import React, { Component } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

    


 class Login extends Component{
   constructor(props){
     super(props);

     this.state={
       email:'',
       password:''
          }
   }

   render(){
   return(
<div>
    <Segment inverted>
        <Form inverted>
            <Form.Group widths='equal'>

                <Form.Input type="email" label='Email' placeholder='joe@schmoe.com'
                onChange={event =>this.setState({email: event.target.value})} />

                <Form.Input type="password" label='Password' placeholder='Password'
                onChange={event =>this.setState({password: event.target.value})} />
            </Form.Group>
            <Button type='submit'>Submit</Button>
        </Form>

    </Segment>

    
    </div>
  )

  }

  }
;
export default Login;
