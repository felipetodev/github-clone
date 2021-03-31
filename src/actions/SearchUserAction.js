import axios from 'axios'
import { getUser, getUserRepos, getUserProfile } from '../services/api'

const getDataApi = (url, key) => axios.get(url(key))

export const loadSearchUser = (userName) => async (dispatch) => {
  dispatch({
    type: 'LOADING_USERS'
  })

  try {
    const { data } = await getDataApi(getUser, userName)

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
    const { data: profileData } = await getDataApi(getUserProfile, userName)
    const { data: repoData } = await getDataApi(getUserRepos, userName)

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
