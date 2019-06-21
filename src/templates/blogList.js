import React from 'react'
import { graphql, Link } from 'gatsby'

import BlogPost from '../components/BlogPost';
import SearchForm from '../components/SearchForm/SearchForm';
import styles from './blogList.module.scss';

const BlogListPage = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  let i;
  let links = [];
  for (i = 1; i <= (data.counter.totalCount-1) / pageContext.limit+1; i++) {
    links.push(
      <Link 
        className={i === pageContext.pageNumber ? [styles.PaginationLink, styles.PaginationLinkActive].join(' ') : styles.PaginationLink} 
        to={['/blog/page/', i].join('')} key={i}
      >
        {i}
      </Link>
    )
  }
  console.log(pageContext);
  return (
    <div className="container">
      <h1>Blog</h1>
      <div className="row">
        <div className="col-12 col-md-8">
          {
            <div className={styles.Pagination}>  
              <Link className={styles.PaginationLink} 
                to={pageContext.pageNumber > 1
                  ? ['/blog/page/', pageContext.pageNumber-1].join('')
                  : ['/blog/page/', pageContext.pageNumber].join('')
                }
              >
                Previous
              </Link>

              { links }
              <Link className={styles.PaginationLink} 
                to={ pageContext.hasNextPage
                  ? pageContext.nextPageLink
                  : ['/blog/page/', pageContext.pageNumber].join('')
                }
              >
                Next
              </Link>
            </div>
          }
          {posts.map(({ node }, index) => {
            const title = node.frontmatter.title || node.fields.slug
            const featuredImg = node.frontmatter.featured_image;
            return (
              <BlogPost
                key={index}
                image={featuredImg}
                title={title}
                url={node.fields.slug}
                excerpt={node.excerpt}
                date={node.frontmatter.date}
                index={index}
              />
            )
          })}
        </div>
        <div className="col-12 col-md-4">
          <SearchForm />
        </div>
      </div>
    </div>
)
}
export default BlogListPage

export const pageQuery = graphql`
  query BlogListPageQuery($skip: Int, $limit: Int) {
    allMarkdownRemark (
      filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
      skip: $skip
      limit: $limit
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            featured_image {
              ...fixedImageMedium
            }
          }
        }
      }
    }
    counter: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
      totalCount
    }
  }
`
