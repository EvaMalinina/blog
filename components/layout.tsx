import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Router from 'next/router'
import styled from 'styled-components'

const Header = styled.section`
  padding: 1em;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  letter-spacing: 1px;
`

export default function Layout({
  children,
  home = true,
  title = 'Travel Blog',
}: {
  children: React.ReactNode
  home?: boolean
  title?: string
}) {
  const getLatestPosts = () => {
    Router.push('/')
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Next.js React.js Redux" />
        <meta name="og:title" content={title} />
      </Head>
      <Header>
        <h1>{title}</h1>
        {home ? (
          <Link href="/posts/new" as={`/posts/new`}>
            <a>Create post</a>
          </Link>
        ) : (
          <button onClick={getLatestPosts}>Latest posts</button>
        )}
      </Header>
      <main>{children}</main>
    </>
  )
}
