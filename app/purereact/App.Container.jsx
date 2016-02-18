import React, {Component} from 'react'

import linkState from './linkState'

import Posts from './Posts.Component'
import Selector from './Selector.Component'

/**
 * propTypes
 * refs
 * tests - Mocha, Chai, Jasmine, Tape, Jest + Karma
 * + fetch errors
 */
/**
 * Tests:
 * + 1. jasmine & React Test Utils
 * + 2. & karma
 * 3. & istanbul, karma-coverage, jasmine-coverage
 * 4. & eslint
 */

export default class App extends Component {
  state = {
    subreddit: '',
    isLoading: false,
    loadingError: null,
    posts: []
  };

  loadSubreddit = () => {
    const { subreddit } = this.state
    this.setState({ isLoading: true, loadingError: null })
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(res => {
      if(res.status >=200 && res.status < 300) {
        return res
      }
      else {
        var error = new Error(response.statusText)
        throw error
      }
    })
    .then(res => res.json())
    .then(json => this.setState({
        isLoading: false,
        posts: json.data.children.map( ({ data }) => { return {title: data.title, id: data.id} } )
      })
    )
    .catch( error => this.setState({ isLoading: false, loadingError: `Error: ${error.message}` }) )
  };

  render() {
    const { subreddit, posts, isLoading, loadingError } = this.state
    const subredditLink = linkState(this, 'subreddit')
    return (
      <div className="container">
        <h4>Subreddit &quot;{subreddit}&quot;</h4>
        <Selector valueLink={subredditLink} onClick={this.loadSubreddit} />
        <Posts items={posts} isLoading={isLoading} loadingError={loadingError} />
      </div>
    )
  }
}
