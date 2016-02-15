import React from 'react'

function Post({ title }) {
  return (
    <div>
      <h5>{title}</h5>
    </div>
  )
}

export default function(props) {
  return (
    <div>
      <Post title="Test Post"/>
    </div>
  )
}
