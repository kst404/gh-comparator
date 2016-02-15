import React from 'react'

function Post({title }) {
  return (
    <li>
      {title}
    </li>
  )
}

export default function({ isLoading, items, loadingError }) {
  if(loadingError !== null) {
    return <div>{loadingError}</div>
  }
  return isLoading ? <div>Loading posts...</div> : <ul>{items.map( ({ id, title }) => <Post title={title} key={id} />)}</ul>
}
