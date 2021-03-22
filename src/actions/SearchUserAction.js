import axios from 'axios'
import { getUser, getUserRepos, getUserProfile } from '../services/api'

export const loadSearchUser = (userName) => async (dispatch) => {
  dispatch({
    type: 'LOADING_USERS'
  })

  try {
    const { data } = await axios.get(getUser(userName))

    dispatch({
      type: 'FETCH_USER',
      payload: {
        user: data
      }
    })
  } catch (error) {
    console.error(error)

    dispatch({
      type: 'FETCH_ERROR'
    })
  }
}

export const loadUserRepos = (userName) => async (dispatch) => {
  dispatch({
    type: 'LOADING_USER'
  })

  try {
    const { data } = await axios.get(getUserRepos(userName))

    dispatch({
      type: 'FETCH_USER_REPOS',
      payload: {
        userRepos: data
      }
    })
  } catch (error) {
    console.error(error)

    dispatch({
      type: 'FETCH_ERROR'
    })
  }
}

export const loadUserProfile = (userName) => async (dispatch) => {
  dispatch({
    type: 'LOADING_USER'
  })

  try {
    const { data } = await axios.get(getUserProfile(userName))

    dispatch({
      type: 'FETCH_USER_PROFILE',
      payload: {
        userProfile: data
      }
    })
  } catch (error) {
    console.error(error)

    dispatch({
      type: 'FETCH_ERROR'
    })
  }
}
