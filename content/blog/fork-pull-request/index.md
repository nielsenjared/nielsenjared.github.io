---
title: How to Submit a Pull Request to a Forked Repository
date: "2018-12-24"
description:
---



## blog-post.js

On line 17 added:

```js
<SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
```

On line 85 added:

```js
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
```

## index.js

On line 33 add:

```js
<p dangerouslySetInnerHTML={{ __html: node.frontmatter.description || node.excerpt }} />
```


On line 61 add:

```js
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
```

## index.md

To the frontmatter of any blog post, add:





##

https://github.com/gatsbyjs/gatsby-starter-blog/pull/146
