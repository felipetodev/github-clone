import Nav from '../components/Nav'
import Search from '../components/Search'
import Users from '../components/Users'
import Wrapper from '../components/Wrapper'

export default function Home () {
  return (
    <>
      <Nav />
      <Wrapper>
        <Search />
        <Users />
      </Wrapper>
    </>
  )
}
