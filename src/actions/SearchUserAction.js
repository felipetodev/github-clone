import axios from 'axios'
import { getUser } from '../services/api'

export const loadSearchUser = (userName) => async (dispatch) => {
  const { data } = await axios.get(getUser(userName))

  dispatch({
    type: 'FETCH_USER',
    payload: {
      user: data
    }
  })
}
