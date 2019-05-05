import React from 'react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import RootLayout from '../RootLayout'

interface PageTemplateProps {
  pageContext: {
    frontmatter: {
      title: string
      parents: string[]
    }
    body: string
    sidebarTree: object
    tree: object
    dir: object
  }
}

const PageTemplate: React.SFC<PageTemplateProps> = ({
  pageContext: {
    frontmatter: { title, parents },
    body,
    sidebarTree,
    previous,
    next,
  },
}) => {
  console.log({ previous, next })
  return (
    <RootLayout
      title={title}
      parents={parents}
      sidebarTree={sidebarTree}
      previous={previous}
      next={next}
    >
      <MDXRenderer>{body}</MDXRenderer>
    </RootLayout>
  )
}
export default PageTemplate
