import { FETCH_POSTS_ERROR, FETCH_POSTS_START, FETCH_POSTS_SUCCESS, IPost } from './types'
import { ActionCreator, Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../index'
import axios from 'axios'

export const getPostsStart = () => ({ type: FETCH_POSTS_START })

export const getPostsFailure = (error: string) => ({
  type: FETCH_POSTS_ERROR,
  payload: error,
})

export const getPostsSuccess = (data: IPost[]) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: data,
})

export type AppThunk = ActionCreator<ThunkAction<void, RootState, null, Action<string>>>

export const getPostsRequest: AppThunk = () => (dispatch) => {
  dispatch(getPostsStart())
  return axios
    .get(`${process.env.API_URL}posts`)
    .then((response) => {
      dispatch(getPostsSuccess(response.data))
      return response.data
    })
    .catch((error) => {
      const { status } = error.response
      dispatch(getPostsFailure(status))
    })
}
