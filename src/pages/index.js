import React from 'react'
import Layout from "../components/layout"

// import Link from 'gatsby-link'
// import banner from './forkyeah-banner.png';
// import './index.css';

class Index extends React.Component {

  render() {
    return(
      <Layout location={this.props.location}>
        {/* <img src={banner} /> */}

        <div id="mc_embed_signup">
          <form
            action="https://jarednielsen.us14.list-manage.com/subscribe/post?u=7bb2004f13affd3cd65365d9e&amp;id=fdf24030be"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
        	    <label htmlFor="mce-EMAIL">
                <h2>Fork your Inbox. It's good for you.</h2>
                <p>Feed your head with gluten-free, sugar-free, vegan recipes delivered weekly.</p>
              </label>
        	    <input
                type="email"
                value={null}
                name="EMAIL"
                className="email"
                id="mce-EMAIL"
                placeholder="email address"
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
                     tabindex="-1"
                     value=""
                   />
                 </div>
              {/*for the peeps*/}
              <div className="clear">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
              </div>
            </div>
        </form>
        <p style={{textAlign: "center"}}
        >Skeptical? <a href="">View the archive.</a> Or <a href="https://github.com/forkyeah/forkyeah">go fork yourself.</a></p>
        </div>
    </Layout>
    )
  }
}
export default Index;
