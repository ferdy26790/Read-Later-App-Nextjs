import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer, {initialState} from './reducer'
import rootSaga  from './saga'

const sagaMiddleware = createSagaMiddleware()

const makeStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  )
  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }
  store.runSagaTask()
  return store
}



export default makeStore