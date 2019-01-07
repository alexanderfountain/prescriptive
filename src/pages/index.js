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
  <main className="main">
  <section className="hero" style={{ backgroundImage: `url(${introimage})` }}>

    <div class="hero-holder">

					<div class="container">

						<div class="content">
							<div class="caption-holder">
								<h1>{heading}</h1>
							</div>
							<p>{introdescription}</p>
						</div>

					</div>

				</div>
    
  </section>

  <section id="services" className="services">

  <div className="container">
					<div class="caption-holder caption-white">
						<h2>Services</h2>
					</div>

					<div class="services-list">
						<div class="services-item">
							<div class="image-holder">
								<img src="images/three-heads-idea-icon.png" alt="Consulting" />
							</div>
							<div class="description">
								<p>Consulting</p>
							</div>
						</div>
						<div class="services-item">
							<div class="image-holder">
								<img src="images/security-icon.png" alt="Infrastructure Planning, Design and Implementation" />
							</div>
							<div class="description">
								<p>Infrastructure Planning, Design and Implementation</p>
							</div>
						</div>
						<div class="services-item">
							<div class="image-holder">
								<img src="images/Cloud-DL-icon.png" alt="On-prem, Cloud, and Hybrid Integration" />
							</div>
							<div class="description">
								<p>On-prem, Cloud, and Hybrid Integration</p>
							</div>
						</div>
						<div class="services-item">
							<div class="image-holder">
								<img src="images/db-icon-black.png" alt="Data Management" />
							</div>
							<div class="description">
								<p>Data Management</p>
							</div>
						</div>
						<div class="services-item">
							<div class="image-holder">
								<img src="images/ssd-icon-black.png" alt="Managed Backup and Disaster Recovery (BDR" />
							</div>
							<div class="description">
								<p>Managed Backup and Disaster Recovery (BDR)</p>
							</div>
						</div>
						<div class="services-item">
							<div class="image-holder">
								<img src="images/Cloud_lock.png" alt="Managed Security Detection and Response (MDR)" />
							</div>
							<div class="description">
								<p>Managed Security Detection and Response (MDR)</p>
							</div>
						</div>
						<div class="services-item">
							<div class="image-holder">
								<img src="images/Monitor-graph-icon.png" alt="Analytics / Business Intelligence" />
							</div>
							<div class="description">
								<p>Analytics / Business Intelligence</p>
							</div>
						</div>
					</div>
				</div>

			</section>

  </main>
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
