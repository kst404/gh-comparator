export const LOAD_POSTS = 'LOAD_POSTS'
export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST'
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS'
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE'

export function loadPosts(name) {
  return {
    type: LOAD_POSTS,
    name
  }
}

export function loadPostsRequest() {
    
}
