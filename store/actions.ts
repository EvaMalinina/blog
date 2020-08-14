import { PostsActionTypes } from './types'
import { ActionCreator, Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from './index'

export type AppThunk = ActionCreator<ThunkAction<void, RootState, null, Action<string>>>

export const fetchPostsRequest: AppThunk = () => {
  // const data = axios.get()
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: PostsActionTypes.FETCH_POSTS_SUCCESS,
        // payload: data,
      })
    } catch (e) {
      return dispatch({
        type: PostsActionTypes.FETCH_POSTS_ERROR,
      })
    }
  }
}
// export function sendPost(newPost: IPost): PostsActionTypes {
//   return {
//     type: SEND_POST,
//     payload: newPost,
//   }
// }
//
// export function deletePost(id: number): PostsActionTypes {
//   return {
//     type: DELETE_POST,
//     meta: {
//       id,
//     },
//   }
// }
