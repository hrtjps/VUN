'use strict';

const { createFilePath } = require(`gatsby-source-filesystem`);

module.exports = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = '/blog' + createFilePath({ node, getNode });
    console.log(value);
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}