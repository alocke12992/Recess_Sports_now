import React from 'react'
import PropTypes from 'prop-types'

export const HeaderAdTemplate = ({title, image, link, alt}) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <a href={link}>
                <img src={image} alt={alt} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

HeaderAdTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string,
  alt: PropTypes.string
}

const HeaderAd = ({data}) => {
  const {markdownRemark: ad} = data

  return (
    <HeaderAdTemplate
      title={ad.frontmatter.title}
      image={ad.frontmatter.image}
      link={ad.frontmatter.link}
      alt={ad.frontmatter.alt}
    />
  )
}

HeaderAd.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HeaderAd

export const HeaderAdQuery = graphql`
  query headerAd($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title,
        image,
        link,
      }
    }
  }
`
