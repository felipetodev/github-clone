import { useSelector } from 'react-redux'
import styled from 'styled-components'

export default function Users () {
  const { user } = useSelector((state) => state.user)

  return (
    <Cards>
      {user.items
        ? user.items.map(user => (
          <Card key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <span>{user.login}</span>
            <button>
              View profile
            </button>
          </Card>
        ))
        : 'Find a user'}
    </Cards>
  )
}

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  grid-gap: 32px;
  max-width: 1000px;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  img {
    border-radius: 50%;
  }

  span {
    text-transform: capitalize;
  }

  button {
    padding: 0.5rem 1rem;
    border-radius: 10px;
    border: 1px solid #ccc;
    background-color: #fafbfc;
    cursor: pointer;

    &:hover {
      background-color: #f3f4f6;
    }
  }
`
