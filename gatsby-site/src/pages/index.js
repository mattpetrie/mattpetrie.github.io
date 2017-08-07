import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () =>
  <div style={{ margin: '3rem auto', maxWidth: 600 }}>
    <h1>Hello world.</h1>
    <p>I am a digital product maker based in Oakland, CA.</p>
    <p>
      Currently, I am a lead software engineer at{' '}
      <Link to="http://www.blackbird-studios.io" target="_blank">
        Blackbird Studios
      </Link>.
    </p>
    <p>
      I specialize in Javascript technologies &mdash; especially React, Redux,
      and GraphQL, but I frequently work with other languages too.
    </p>
    <p>
      You can contact me by{' '}
      <Link to="mailto:matthew.petrie@gmail.com" target="_blank">
        email
      </Link>, read about my work on{' '}
      <Link to="https://www.linkedin.com/in/mattpetrie" target="_blank">
        LinkedIn
      </Link>, or view some of my projects on{' '}
      <Link to="https://www.github.com/mattpetrie" target="_blank">
        Github
      </Link>.
    </p>
    <h4 className="sig">&mdash; Matt Petrie</h4>
  </div>

export default IndexPage
