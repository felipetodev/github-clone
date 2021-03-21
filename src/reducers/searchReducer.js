const initialState = {
  user: []
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return {
        ...state,
        user: action.payload.user
      }
    default:
      return {
        ...state
      }
  }
}

export default searchReducer
