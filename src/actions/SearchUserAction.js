import axios from 'axios'
import { getUser, getUserRepos } from '../services/api'

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
