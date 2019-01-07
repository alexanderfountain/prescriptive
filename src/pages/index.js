import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  introdescription,
  title,
  heading,
  introimage,
}) => (
  <div style={{ backgroundImage: `url(${introimage})` }}>
    <h1>{title}</h1>
    <h2>{heading}</h2>
    <h3>{introdescription}</h3>
    
  </div>
)

IndexPageTemplate.propTypes = {
  intro: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    introimage: PropTypes.string,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.intro.heading}
        introdescription={frontmatter.intro.description}
        introimage={frontmatter.intro.introimage}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const indexPageQuery = graphql`
query IndexByPath($path: String!){
  markdownRemark(frontmatter: {path:{eq: $path}}){
      frontmatter{
          path
          title
          intro{
            heading
            description
            introimage
          }
      }
  }
}
`
