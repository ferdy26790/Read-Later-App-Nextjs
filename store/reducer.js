
const initialState = {
  pocket:[],
  news:[],
  error: false
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'FAIL_FETCH':
      return {
        ...state,
        ...{error: action.payload}
      }
    case 'FETCH_ALL_NEWS':
      action.payload.map((news, idx) => {
        news.id = idx+1
      })
      return {
        ...state,
        ...{pocket: [action.payload[0]]},
        ...{news: action.payload}
      }
    case 'ADD_TO_POCKET':
      let copyPocket = [...state.pocket]
      let alreadyAdd = false
      copyPocket.map(pocket => {
        if(pocket.title === action.payload.title) {
          alreadyAdd = true
        }
      })
      if (alreadyAdd) {
        alert('You already added this news to PocketList')
        return state
      } else {
        copyPocket.push(action.payload)
        alert('added to pocket list')
        return {
          ...state,
          ...{pocket: copyPocket}
        }
      }
      
    case 'DELETE_FROM_POCKET':
      let clonePocket = [...state.pocket]
      let newPocket = clonePocket.filter(newsPocket => newsPocket.title !== action.payload.title)
      return {
        ...state,
        ...{pocket: newPocket}
      }
    default:
      return state
  }
}
