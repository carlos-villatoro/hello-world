// bring in React and Component from react
import React, {Component} from 'react'
import Qoute from './Qoute.js'
import Kitten from './Kitten.js'

// define our component
class Hello extends Component {
  // what should this component render
  render(){
    return (
      <>
        <h1>hello world</h1>
        <h2>this is react</h2>
        <Qoute/>
        <Kitten/>
      </>

    )
  }
}

export default Hello