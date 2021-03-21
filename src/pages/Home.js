import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadSearchUser } from '../actions/SearchUserAction'

export default function Home () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadSearchUser())
  }, [])

  return (
    <h1>Home</h1>
  )
}
