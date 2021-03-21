import { Link } from 'react-router-dom'
import { GoMarkGithub } from 'react-icons/go'
import styled from 'styled-components'

export default function Nav () {
  return (
    <StyledNav>
      <Link to='/'>
        <GoMarkGithub />
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
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    margin-left: 2rem;
  }

  svg {
    font-size: 2rem;
    margin-right: 1rem;
  }
`
