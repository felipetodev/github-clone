import { Link } from 'react-router-dom'
import { GoMarkGithub } from 'react-icons/go'
import styled from 'styled-components'

export default function Footer () {
  return (
    <StyledFooter>
      <Link to='/'>
        <GoMarkGithub />
      </Link>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #ccc;
  padding: 1rem;
  margin-top: 2.5rem;

  svg {
    color: #ccc;
    font-size: 2rem;
    margin: 0;
  }
`
