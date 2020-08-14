import Layout from '../../components/layout'
import React from 'react'
import { useForm } from 'react-hook-form'
import { IPost } from '../../models/post'
import styled from 'styled-components'

const Form = styled.form`
  padding: 1em;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  letter-spacing: 1px;
  margin: 0 20%;

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
`

const Error = styled.p`
  color: red;
`

const Post = () => {
  const { register, handleSubmit, errors } = useForm<IPost>()
  const onSubmit = (data: IPost) => {
    console.log(data)
  }

  return (
    <Layout title={'New Post - Travel Blog'} home={false}>
      <h1>New Post</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" ref={register({ required: true })} />
          {errors.title && errors.title.type === 'required' && (
            <Error>Your must enter the title.</Error>
          )}
        </div>
        <div>
          <label htmlFor="body">Description</label>
          <textarea
            defaultValue={''}
            ref={register({ required: true })}
            id="body"
            name="body"
            rows={4}
            cols={20}
          ></textarea>
          {errors.body && errors.body.type === 'required' && (
            <Error className="error">Your must enter a description.</Error>
          )}
        </div>
        <button type="submit">Save</button>
      </Form>
    </Layout>
  )
}

export default Post
