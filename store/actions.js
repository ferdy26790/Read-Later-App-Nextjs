export const actionTypes = {
  FETCH_ALL_NEWS:'FETCH_ALL_NEWS',
  FETCH_FAIL: 'FETCH_FAIL',
  ADD_TO_POCKET: 'ADD_TO_POCKET',
  DELETE_FROM_POCKET: 'DELETE_FROM_POCKET'
}

export function fetchData (payload) {
  return {
    type: actionTypes.FETCH_ALL_NEWS,
    payload: payload
  }
}

export function failFetchData (payload) {
  return {
    type: actionTypes.FETCH_FAIL,
    payload: payload
  }
}

export function addToPocket (payload) {
  return {
    type: actionTypes.ADD_TO_POCKET,
    payload: payload
  }
}

export function deleteFormPocket (payload) {
  return {
    type: actionTypes.DELETE_FROM_POCKET,
    payload: payload
  }
}