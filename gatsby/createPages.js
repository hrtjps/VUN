'use strict';

const path = require(`path`);
const _ = require('lodash');

const PAGE_SIZE = 2
module.exports = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogListTemplate = path.resolve(`src/templates/blogList.js`)
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 1000, filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    let chunks = _.chunk(result.data.allMarkdownRemark.edges, PAGE_SIZE)

    chunks.forEach((chunk, index) => {
      if (index == 0) {
        createPage({
          path: `blog`,
          component: blogListTemplate,
          context: {
            skip: PAGE_SIZE * index,
            limit: PAGE_SIZE,
            pageNumber: index + 1,
            hasNextPage: index != chunks.length - 1,
            nextPageLink: `/blog/page/${index + 2}`,
          },
        })
      }
      createPage({
        path: `blog/page/${index + 1}`,
        component: blogListTemplate,
        context: {
          skip: PAGE_SIZE * index,
          limit: PAGE_SIZE,
          pageNumber: index + 1,
          hasNextPage: index != chunks.length - 1,
          nextPageLink: `/blog/page/${index + 2}`,
        },
      })
    })

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path:  post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}