import React from 'react'
// import Button from 'antd/lib/button'
// import 'antd/lib/button/style/css'
import { Link } from 'gatsby'
import { Header } from '../components/Header'
import { Button, PageHeader, Icon } from 'antd'

const IndexPage = () => {
  return (
    <div align="center" style={{ padding: 80 }}>
      <p
        style={{
          color: 'cornflowerblue',
          fontSize: 50,
          fontWeight: 'bold',
        }}
      >
        Gatsby Antd Markdown Documentation Boilerplate
      </p>
      <h2>A gatsby starter to create documentation websites</h2>
      <p>
        This is a fork of{' '}
        <a href="https://github.com/cvluca/gatsby-starter-markdown">
          https://github.com/cvluca/gatsby-starter-markdown
        </a>
      </p>
      <br />
      <Button.Group size="large">
        <Button
          size="large"
          href="https://github.com/jannikbuschke/gatsby-antd-docs"
          target="_blank"
        >
          Github
          <Icon type="github" />
        </Button>
        <Button type="primary" size="large" style={{ marginRight: 10 }}>
          <Link to="/docs/get-started/introduction">Get Started</Link>
        </Button>
      </Button.Group>
    </div>
  )
}

export default IndexPage
