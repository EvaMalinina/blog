import { DELETE_POST, PostsActionTypes, PostsState, SEND_POST } from './types'

const initialState: PostsState = {
  posts: [],
}

export function postsReducer(state = initialState, action: PostsActionTypes): PostsState {
  switch (action.type) {
    case SEND_POST:
      return {
        posts: [...state.posts, action.payload],
      }
    case DELETE_POST:
      return {
        posts: state.posts.filter((post) => post.id !== action.meta.id),
      }
    default:
      return state
  }
}
