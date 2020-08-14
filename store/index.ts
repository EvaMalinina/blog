import { postsReducer } from './reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  posts: postsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
