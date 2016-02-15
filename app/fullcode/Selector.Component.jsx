import React from 'react'

function Selector({ text, onClick, dispatch }) {
  return (
    <section className="row">
      <div className="nine columns"><input type="text" value={text} placeholder="Subreddit name" className="u-full-width" /></div>
      <div className="three columns"><button className="button" onClick={e => onClick()}>Load Posts</button></div>
    </section>
  )
}
