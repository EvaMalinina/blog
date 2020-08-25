import { RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { getPostsRequest } from '../../store/posts/actions'

const Posts = () => {
  const data = useSelector((state: RootState) => state.data.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostsRequest())
  }, [])

  return (
    <>
      <h2>Data from Redux store</h2>
      <ul>
        {data.map(({ id, title, body }) => (
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
    </>
  )
}

export default Posts
