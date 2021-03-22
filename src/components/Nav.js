import { Link, useLocation } from 'react-router-dom'
import { GoMarkGithub } from 'react-icons/go'
import styled from 'styled-components'
import Search from './Search'

export default function Nav () {
  const { pathname } = useLocation()
  const pathKey = pathname.split('/')[1]

  return (
    <StyledNav>
      <Link to='/'>
        <GoMarkGithub />
        <h1>GitHub</h1>
      </Link>
      {pathKey === 'search' &&
        <Search />}
    </StyledNav>
  )
}

const StyledNav = styled.div`
  display: flex;
  background-color: var(--app-background-color);
  color: var(--text-subtitle-color);
  padding: 1rem 0;

  &:hover > * {
    transition: all 300ms ease;
    color: var(--app-hover-color);
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--text-subtitle-color);
    margin: 0rem 2rem;
  }

  svg {
    font-size: 2rem;
    margin-right: 1rem;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      margin: 0;
    }
  }
`
