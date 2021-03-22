import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

export default function Error () {
  return (
    <>
      <Nav />
      <ErrorStyled>
        <h1>404</h1>
        <Link to='/'>Go home</Link>
      </ErrorStyled>
      <Footer />
    </>
  )
}

const ErrorStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`
