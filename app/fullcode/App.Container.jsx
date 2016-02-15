import React, {Component} from 'react'
import { connect } from 'react-redux'

import Posts from './Posts.Component'
import Selector from './Selector.Component'

import { loadPosts } from './actions'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Selector />
        <Posts />
      </div>
    )
  }
}
