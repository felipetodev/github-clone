import styled from 'styled-components'

export default function Wrapper ({ children }) {
  return (
    <WrapperStyled>
      {children}
    </WrapperStyled>
  )
}

const WrapperStyled = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 1rem;
`
