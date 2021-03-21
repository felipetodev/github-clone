import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadSearchUser, loadUserRepos } from '../actions/SearchUserAction'
import { GoRepo, GoStar, GoLaw } from 'react-icons/go'
import styled from 'styled-components'
import Nav from '../components/Nav'
import Wrapper from '../components/Wrapper'
import TimeAgo from '../components/TimeAgo'

export default function SearchResults () {
  const dispatch = useDispatch()
  const location = useLocation()
  const pathId = location.pathname.split('/')[2]

  const { user } = useSelector((state) => state)

  useEffect(() => {
    if (pathId !== '') {
      dispatch(loadSearchUser(pathId))
      dispatch(loadUserRepos(pathId))
    }
  }, [dispatch, pathId])

  return (
    <div>
      <Nav />
      <Wrapper>
        <div className='userContainer'>
          {user.user.items
            ? user.user.items.map(user => (
              <Container key={user.id}>
                <img src={user.avatar_url} alt={user.login} />
                <span>{user.login}</span>
                <a href={user.html_url} target='blank'>View Github Profile</a>
              </Container>
            ))
            : ''}

          <h3>Latest Repos</h3>

          <div>
            {user.userRepos.map(repo => (
              <RepoContainer key={repo.id}>
                <div>
                  <GoRepo />
                  <a href={repo.clone_url} target='blank'>{repo.name}</a>
                </div>
                <span>{repo.description}</span>
                <RepoInfo>
                  <span>{repo.language}</span>
                  <div>
                    <GoStar />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <span>
                    {repo.license
                      ? (
                        <span>
                          <GoLaw />
                          {repo.license.name}
                        </span>
                        )
                      : ''}
                  </span>
                  <span>
                    Updated {' '}
                    <TimeAgo timestamp={new Date(repo.updated_at).getTime()} />
                  </span>
                </RepoInfo>
              </RepoContainer>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  width: 50%;

  img {
    width: 250px;
    border-radius: 50%;
  }

  a {
    padding: 0.5rem 1rem;
    border-radius: 10px;
    border: 1px solid #ccc;
    background-color: #fafbfc;
    color: inherit;
    cursor: pointer;

    &:hover {
      background-color: #f3f4f6;
    }
  }
`

const RepoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;

  a {
    color: #1b75da;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    padding: 1rem;
    font-size: 0.8rem;
    color: #586069;
  }
`
const RepoInfo = styled.div`
  display: flex;
  align-items: baseline;
`
