import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Matt Petrie: Digital Product Maker"
      meta={[
        {
          name: 'description',
          content:
            'Personal site for Matt Petrie, a software engineer in Oakland, CA.',
        },
        {
          name: 'keywords',
          content: 'javascript react redux graphql node es6 react-native',
        },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: '3rem',
      }}
    >
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
