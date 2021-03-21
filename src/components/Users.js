import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GoPerson } from 'react-icons/go'

export default function Users () {
  const { user } = useSelector((state) => state.user)

  return (
    <Cards>
      {user.items
        ? user.items.map(user => (
          <Card key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <span>{user.login}</span>
            <Link to={`/search/${user.login}`}>
              <button>
                <GoPerson />
                View profile
              </button>
            </Link>
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
  transition: all 300ms ease;
  border-radius: 10px;

  &:hover {
    background-color: #ebedf0;
  }

  & > * {
    margin-bottom: 10px;
  }

  img {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
  }

  span {
    text-transform: capitalize;
    font-weight: bold;
  }

  button {
    width: 95%;
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