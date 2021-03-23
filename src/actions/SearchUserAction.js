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

export const loadUserProfile = (userName) => async (dispatch) => {
  dispatch({
    type: 'LOADING_USER'
  })

  try {
    const { data: profileData } = await axios.get(getUserProfile(userName))
    const { data: repoData } = await axios.get(getUserRepos(userName))

    dispatch({
      type: 'FETCH_USER_PROFILE',
      payload: {
        userProfile: profileData,
        userRepos: repoData
      }
    })
  } catch (error) {
    console.error(error)

    dispatch({
      type: 'FETCH_ERROR'
    })
  }
}
