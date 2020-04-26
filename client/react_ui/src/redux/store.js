import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import userReducer from './users/userReducer'

// import rootReducer from './rootReducer'

const store = createStore(
    userReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
