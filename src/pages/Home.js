import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { loadSearchUser } from 'actions/SearchUserAction'
import Footer from 'components/Footer'
import Nav from 'components/Nav'
import Search from 'components/Search'
import Users from 'components/Users'
import Wrapper from 'components/Wrapper'

export default function Home () {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const pathId = pathname.split('/')[2]

  useEffect(() => {
    if (pathname === '/') return
    dispatch(loadSearchUser(pathId))
  }, [dispatch, pathId])

  return (
    <>
      <Nav />
      <Wrapper>
        {pathname === '/'
          ? (
            <h1 style={{ display: 'flex', justifyContent: 'center', padding: '5rem' }}>
              Welcome to Github Clone
              Search for a user profile to explore
            </h1>)
          : ''}
        <Search />
        <Users />
        <Footer />
      </Wrapper>
    </>
  )
}
