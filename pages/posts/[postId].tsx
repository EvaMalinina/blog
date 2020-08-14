import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { IPost } from '../../models/post'
import Link from 'next/link'

export default function Post({ postData }: { postData: IPost }) {
  return (
    <>
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
      <Link href="/">
        <a>Back to all posts</a>
      </Link>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await axios.get(`${process.env.API_URL}posts/${ctx.query.postId}?_embed=comments`)
  const postData = res.data
  return { props: { postData } }
}
