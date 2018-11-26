import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Login', render: () => <Tab.Pane attached={false}>Form for login..
  </Tab.Pane> },
  { menuItem: 'Signup', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
]

const HomeTabs = () => <Tab menu={{ secondary: true }} panes={panes} />

export default HomeTabs
