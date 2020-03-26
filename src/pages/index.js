import React from 'react'
import Layout from "../components/layout"

import SEO from '../components/seo'


import { Link, graphql } from 'gatsby'
import banner from './jared-nielsen-banner.png';
import './index.css';

class Index extends React.Component {

  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title

    return(
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Jared Nielsen" keywords={['jared nielsen', 'problem solving', 'programming', 'lifelong learning']} />

        <img src={banner} />

        <div id="mc_embed_signup">
          <form
            action="https://jarednielsen.us14.list-manage.com/subscribe/post?u=7bb2004f13affd3cd65365d9e&amp;id=fdf24030be"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll">
        	    <label htmlFor="mce-EMAIL">
                <h2>Programming is problem solving.</h2>
                <p>Want to level up your skills? I write a weekly newsletter about programming, problem solving and lifelong learning.</p>
                <p>It's <em>The Solution</em>.</p>
                <p>Look for it on Sundays.</p>
              </label>
        	    <input
                type="email"
                defaultValue=""
                name="EMAIL"
                className="email"
                id="mce-EMAIL"
                placeholder="Your email"
                // required
              />
                {/*for the bots*/}
                 <div
                   aria-hidden="true"
                   style={{position: 'absolute', left: '-5000px'}}
                  >
                   <input
                     type="text"
                     name="b_7bb2004f13affd3cd65365d9e_fdf24030be"
                     tabIndex="-1"
                     defaultValue=""
                   />
                 </div>
              {/*for the peeps*/}
              <div className="clear">
                <input type="submit" value="Join now" name="subscribe" id="mc-embedded-subscribe" className="button" />
              </div>
            </div>
        </form>
        <p style={{textAlign: "center"}}>
          Skeptical? Here's a sample: <a href="https://jarednielsen.com/programming-problem-solving/">Programming is Problem Solving</a>
        </p>
        </div>
    </Layout>
    )
  }
}
export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`