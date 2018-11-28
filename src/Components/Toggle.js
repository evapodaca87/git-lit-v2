import React, { Component } from 'react';
import { Checkbox } from 'semantic-ui-react'
import { Button, Divider, Image, Transition } from 'semantic-ui-react'




 class ToggleBox extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state

    return (
      <div className="fire">
        <Checkbox toggle content={visible ? 'Hide' : 'Show'} onClick={this.toggleVisibility} />
        <Divider hidden />
        <Transition visible={visible} animation='scale' duration={500}>

        <Image size='small' style={{width: 100, height: 100}}src='http://cdn.shopify.com/s/files/1/1061/1924/products/Fire_Emoji_grande.png?v=1480481043' />

        </Transition>
      </div>
    )
  }
}

export default ToggleBox
