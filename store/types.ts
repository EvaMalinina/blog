export interface IPost {
  id: number
  title: string
  body: string
}

export enum PostsActionTypes {
  FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
}

export interface PostsState {
  readonly loading: boolean
  readonly data: IPost[]
  readonly errors?: string
}
