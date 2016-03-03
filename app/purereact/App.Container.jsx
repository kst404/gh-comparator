import React, {Component} from 'react'

import linkState from './linkState'

import Posts from './Posts.Component'
import Selector from './Selector.Component'
import FetchJson from './FetchJson.Component'

/**
 * + propTypes
 * refs
 * + tests - Mocha, Chai, Jasmine, Tape, Jest + Karma
 * + fetch errors
 * react hot loader
 */
/**
 * Tests:
 * + 1. jasmine & React Test Utils
 * + 2. & karma
 * + 3. & istanbul, karma-coverage
 * 4. & eslint
 */

export default class App extends Component {
  state = {
    subreddit: '',
    url: '',
    isLoading: false,
    loadingError: null,
    posts: []
  };

  loadSubreddit = () => {
    const { subreddit } = this.state

    this.setState({ isLoading: true, loadingError: null, url: `https://www.reddit.com/r/${subreddit}.json` })

    // fetch(`https://www.reddit.com/r/${subreddit}.json`)
    // .then(res => {
    //   if(res.status >=200 && res.status < 300) {
    //     return res
    //   }
    //   else {
    //     var error = new Error(response.statusText)
    //     throw error
    //   }
    // })
    // .then(res => res.json())
    // .then(json => this.setState({
    //     isLoading: false,
    //     posts: json.data.children.map( ({ data }) => { return {title: data.title, id: data.id} } )
    //   })
    // )
    // .catch( error => this.setState({ isLoading: false, loadingError: `Error: ${error.message}` }) )
  };

  loadSubredditSuccess = json => this.setState({
      isLoading: false,
      posts: json.data.children.map( ({ data }) => { return {title: data.title, id: data.id} } )
    });

  loadSubredditError = error => this.setState({ isLoading: false, loadingError: `Error: ${error.message}` });

  render() {
    const { subreddit, posts, isLoading, loadingError, url } = this.state
    // const subredditLink = linkState(this, 'subreddit')
    return (
      <div className="container">
        <h4>Subreddit &quot;{subreddit}&quot;</h4>
        <FetchJson url={url} onSuccess={this.loadSubredditSuccess} onError={this.loadSubredditError} />
        <Selector valueLink={linkState(this, 'subreddit')} onClick={this.loadSubreddit} />
        <Posts items={posts} isLoading={isLoading} loadingError={loadingError} />
      </div>
    )
  }
}
