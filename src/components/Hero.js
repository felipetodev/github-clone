import styled from 'styled-components'

export default function Hero () {
  return (
    <HeroStyled>
      <h1>Welcome to GitHub Clone</h1>
      <h3>Search for a user profile to explore</h3>
    </HeroStyled>
  )
}

const HeroStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  padding: 5rem;

  @media (max-width: 800px) {
    font-size: 90%;
    padding: 2rem;
  }
`
