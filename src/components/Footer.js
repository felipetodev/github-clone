import { GoMarkGithub } from 'react-icons/go'
import styled from 'styled-components'

export default function Footer () {
  return (
    <StyledFooter>
      <GoMarkGithub />
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #ccc;
  padding: 1rem;
  margin-top: auto;

  svg {
    color: #ccc;
    font-size: 2rem;
  }
`
