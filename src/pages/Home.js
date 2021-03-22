import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Search from '../components/Search'
import Users from '../components/Users'
import Wrapper from '../components/Wrapper'
import { useLocation } from 'react-router-dom'

export default function Home () {
  const { pathname } = useLocation()

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
