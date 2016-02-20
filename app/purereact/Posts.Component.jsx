import React from 'react'

const Post = ({ title }) => (
  <li>{title}</li>
)

Post.propTypes = {
  title: React.PropTypes.string
}
Post.defaultProps = {
  title: '[Untitled]'
}

const Posts = ({ isLoading, items, loadingError }) => {
  if(loadingError !== null) {
    return <div>{loadingError}</div>
  }

  if(isLoading == true) {
    return <div>Loading posts...</div>
  }

  return <ul>{items.map( ({ id, title }) => <Post title={title} key={id} />)}</ul>
}

Posts.propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  items: React.PropTypes.array.isRequired,
  loadingError: React.PropTypes.string
}

export default Posts
