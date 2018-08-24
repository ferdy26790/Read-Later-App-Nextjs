import axios from 'axios'
import {put, call, takeLatest, all } from 'redux-saga/effects'
import { fetchData, failFetchData } from './actions'
import { getData } from './api'
function * fetchAllNews() {
  try {
    const data = yield call(getData)
    yield put(fetchData(data))
  } catch (err) {
    yield put(failFetchData(err))
  }
}


function * rootSaga () {
  yield all([
    fetchAllNews()
  ])
}

export default rootSaga