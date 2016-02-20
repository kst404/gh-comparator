import React from 'react'

const Selector = ({ valueLink, onClick }) => (
    <section className="row">
      <div className="nine columns"><input type="text" valueLink={valueLink} placeholder="Subreddit name" className="u-full-width" /></div>
      <div className="three columns"><button className="button" onClick={onClick}>Load Posts</button></div>
    </section>
  )

Selector.propTypes = {
    valueLink: React.PropTypes.object.isRequired,
    onClick: React.PropTypes.func.isRequired
}

export default Selector
