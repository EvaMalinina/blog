import React from 'react'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import Layout from '../components/layout'
import styled from 'styled-components'
import Link from 'next/link'
import { Posts } from '../models/posts'
import { IPost } from '../models/post'

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

export default function Home({ allPostsData }: { allPostsData: IPost[] }) {
  return (
    <Layout home>
      <Wrapper>
        <p>Hello, traveler!</p>
        <ul>
          {allPostsData.map(({ id, title, body }) => (
            <li key={id}>
              <Link href="/posts/[postId]?_embed=comments" as={`/posts/${id}?_embed=comments`}>
                <a>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Wrapper>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get(`${process.env.API_URL}posts`)
  const allPostsData: Posts = res.data
  return { props: { allPostsData } }
}
