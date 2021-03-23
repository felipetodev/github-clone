const initialState = {
  user: [],
  userRepos: [],
  userProfile: [],
  loading: false,
  error: ''
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_USERS':
      return {
        ...state,
        loading: true,
        error: ''
      }
    case 'LOADING_USER':
      return {
        ...state,
        loading: true,
        error: ''
      }
    case 'FETCH_USER':
      return {
        ...state,
        user: action.payload.user.items,
        loading: false,
        error: action.payload.user.items.length === 0
          ? 'We couldn’t find any repositories...'
          : ''
      }
    case 'FETCH_USER_PROFILE':
      return {
        ...state,
        userProfile: action.payload.userProfile,
        userRepos: action.payload.userRepos,
        loading: false,
        error: ''
      }
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: 'Something went wrong...'
      }
    default:
      return {
        ...state
      }
  }
}

export default searchReducer
