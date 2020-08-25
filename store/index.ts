import { postsReducer } from './posts/reducers'
import { applyMiddleware, combineReducers, compose } from 'redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// is any appropriate here ?
const enhancers: any[] = []
const middleware = [thunk]

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

const rootReducer = combineReducers({
  data: postsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(composedEnhancers))
