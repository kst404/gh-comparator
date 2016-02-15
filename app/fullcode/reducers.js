import { combineReducers } from 'redux'

import { LOAD_POSTS } from './actions'

function subreddit(state = '', { type, name }) {
  if(type == LOAD_POSTS) {
    return name
  }
  return state
}

function posts(state = [], action) {
  return state
}

export default combineReducers({
  subreddit,
  posts
})
