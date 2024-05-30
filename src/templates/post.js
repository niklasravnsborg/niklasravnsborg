import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Container from '../components/Container'
import BorderCard from '../components/BorderCard'
import UnderlineLink from '../components/UnderlineLink'

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const siteTitle = post.frontmatter.title

  return (
    <Layout title={siteTitle}>
      <Container>
        <article>
          <h1 className="mb-3 text-xl">{post.frontmatter.title}</h1>
          <div
            className="prose text-pretty md:prose-lg"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
        <BorderCard className="p-4">
          Du hast Feedback zu diesem Artikel?{' '}
          <UnderlineLink>
            <a
              href={`mailto:hej@niklasravnsborg.com?subject=Feedback zu "${post.frontmatter.title}"`}
              target="_blank"
              rel="noreferrer"
              aria-label="Mail an hej@niklasravnsborg.com"
              children="Schreib mir eine Antwort"
            />
          </UnderlineLink>
          !
        </BorderCard>
      </Container>
      {/* {previous && (
        <>
          <h3>Previous Post:</h3>
          <Post
            title={previous.frontmatter.title}
            slug={previous.fields.slug}
            excerpt={previous.frontmatter.description || previous.excerpt}
            readingTime={previous.fields.readingTime.text}
            date={previous.frontmatter.date}
          />
        </>
      )} */}

      {/* {next && (
        <>
          <h3>Next Post:</h3>
          <Post
            title={next.frontmatter.title}
            slug={next.fields.slug}
            excerpt={next.frontmatter.description || next.excerpt}
            readingTime={next.fields.readingTime.text}
            date={next.frontmatter.date}
          />
        </>
      )} */}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        # date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
