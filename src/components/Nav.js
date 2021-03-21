import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Nav () {
  return (
    <StyledNav>
      <Link to='/'>
        <h1>Github</h1>
      </Link>
    </StyledNav>
  )
}

const StyledNav = styled.div`
  background-color: #24292e;
  color: #fff;
  padding: 1rem 0;

  a {
    text-decoration: none;
    color: white;
  }
`
