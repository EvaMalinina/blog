import {
  FETCH_POSTS_ERROR,
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  IPost,
  PostsActionTypes,
  PostsState,
} from './types'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

const initialState: PostsState = {
  posts: [],
  loading: false,
}

export const useTypedSelector: TypedUseSelectorHook<PostsState> = useSelector

export function postsReducer(
  state = initialState,
  action: PostsActionTypes
): { loading: boolean; posts: IPost[] } {
  switch (action.type) {
    case FETCH_POSTS_START:
      return {
        ...state,
        loading: true,
      }
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      }
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
