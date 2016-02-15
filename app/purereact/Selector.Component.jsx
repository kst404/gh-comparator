import React from 'react'

export default function({ valueLink, onClick }) {
  return (
    <section className="row">
      <div className="nine columns"><input type="text" valueLink={valueLink} placeholder="Subreddit name" className="u-full-width" /></div>
      <div className="three columns"><button className="button" onClick={onClick}>Load Posts</button></div>
    </section>
  )
}
