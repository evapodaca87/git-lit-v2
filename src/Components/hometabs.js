import React from 'react';
import { Tab } from 'semantic-ui-react';
import SignUp from './signup.js';
import Login from './login.js';

const panes = [
    {
        menuItem: 'Login',
        render: () => (
            <Tab.Pane attached={false}>
                <Login />
            </Tab.Pane>
        )
    },
    {
        menuItem: 'Signup',
        render: () => (
            <Tab.Pane attached={false}>
                <SignUp />
            </Tab.Pane>
        )
    }
];

const HomeTabs = () => <Tab menu={{ secondary: true }} panes={panes} />;

export default HomeTabs;
