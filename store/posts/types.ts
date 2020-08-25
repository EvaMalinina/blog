export interface IPost {
  id: number
  title: string
  body: string
}

export interface PostsState {
  loading: boolean
  posts: IPost[]
}

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'
export const FETCH_POSTS_START = 'FETCH_POSTS_START'

interface FetchPostsStartAction {
  type: typeof FETCH_POSTS_START
}

interface FetchPostsSuccessAction {
  type: typeof FETCH_POSTS_SUCCESS
  payload: PostsState
  loading: string
}

interface FetchPostsErrorAction {
  type: typeof FETCH_POSTS_ERROR
}

export type PostsActionTypes =
  | FetchPostsStartAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction
