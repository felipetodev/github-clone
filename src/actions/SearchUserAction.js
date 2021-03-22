import axios from 'axios'
import { getUser, getUserRepos, getUserProfile } from '../services/api'

export const loadSearchUser = (userName) => async (dispatch) => {
  const { data } = await axios.get(getUser(userName))

  dispatch({
    type: 'FETCH_USER',
    payload: {
      user: data
    }
  })
}

export const loadUserRepos = (userName) => async (dispatch) => {
  const { data } = await axios.get(getUserRepos(userName))

  dispatch({
    type: 'FETCH_USER_REPOS',
    payload: {
      userRepos: data
    }
  })
}

export const loadUserProfile = (userName) => async (dispatch) => {
  const { data } = await axios.get(getUserProfile(userName))

  dispatch({
    type: 'FETCH_USER_PROFILE',
    payload: {
      userProfile: data
    }
  })
}
