import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadUserProfile, loadUserRepos } from 'actions/SearchUserAction'
import { GoRepo, GoStar, GoLaw, GoPrimitiveDot, GoLocation, GoOrganization, GoMail, GoLink } from 'react-icons/go'
import { AiOutlineTwitter } from 'react-icons/ai'
import styled from 'styled-components'
import Nav from 'components/Nav'
import Wrapper from 'components/Wrapper'
import Footer from 'components/Footer'
import TimeAgo from 'hooks/TimeAgo'
import getLanguageColor from 'hooks/getLanguage'

export default function SearchResults () {
  const dispatch = useDispatch()
  const location = useLocation()
  const pathId = location.pathname.split('/')[2]

  const { user } = useSelector((state) => state)

  useEffect(() => {
    if (pathId !== '') {
      dispatch(loadUserProfile(pathId))
      dispatch(loadUserRepos(pathId))
      window.scrollTo(0, 0)
    }
  }, [dispatch, pathId])

  return (
    <div>
      <Nav />
      <Wrapper>
        <div className='userContainer'>
          <Container>
            <Avatar>
              <img src={user.userProfile.avatar_url} alt={user.login} />
              <h1>{user.userProfile.name}</h1>
              <h4>{user.userProfile.login}</h4>
              <a href={user.userProfile.html_url} target='blank'>View Github Profile</a>
            </Avatar>
            <UserDetails>
              <div className='followers'>
                <span>Repositories: {user.userProfile.public_repos}</span>
                <span>
                  <GoOrganization /> Followers:{' '}
                  {user.userProfile.followers}
                </span>
                <span>Following: {user.userProfile.following}</span>
              </div>
              <div className='user__details'>
                <span>
                  <GoLocation />
                  {user.userProfile.location
                    ? user.userProfile.location
                    : 'Nowhere'}
                </span>
                <span>
                  <GoMail />
                  {user.userProfile.email ? user.userProfile.email : 'No email'}
                </span>
                {user.userProfile.blog
                  ? (
                    <span>
                      <GoLink />
                      <a href={user.userProfile.blog} target='blank'>
                        {user.userProfile.blog}
                      </a>
                    </span>)
                  : ''}
                {user.userProfile.twitter_username
                  ? (
                    <span>
                      <AiOutlineTwitter />
                      <a href={`https://twitter.com/${user.userProfile.twitter_username}`} target='blank'>
                        @{user.userProfile.twitter_username}
                      </a>
                    </span>)
                  : ''}
              </div>
            </UserDetails>
          </Container>

          <h3>Latest Repos</h3>

          {user.userRepos.map(repo => (
            <RepoContainer key={repo.id}>
              <div>
                <GoRepo />
                <a href={repo.clone_url} target='blank'>{repo.name}</a>
              </div>
              <span>{repo.description}</span>
              <RepoInfo>
                <span>
                  <GoPrimitiveDot style={{ color: getLanguageColor(repo.language) }} />
                  {repo.language}
                </span>
                <div className='star'>
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

        <Footer />
      </Wrapper>
    </div>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 1rem;
  margin-top: 3rem;
  border-radius: 10px;
  margin-bottom: 1rem;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 90%;
  }

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

const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 1rem;

  @media (max-width: 800px) {
    margin: 0;
  }

  h1 {
    margin-top: 10px;
    font-size: 1.5rem;
    line-height: 1.25;
  }

  h4 {
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    color: #586069;
  }

  a {
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }
`

const UserDetails = styled.div`
  .followers {
    display: flex;
    justify-content: flex-end;
    font-weight: 600;
    padding: 1rem;
    color: #f9826c;

    & > * {
      margin-right: 1.5rem;
    }

    @media (max-width: 500px) {
      flex-direction: column;

      & > span {
        margin-bottom: 5px;
      }
    }
  }

  .user__details {
    display: flex;
    flex-direction: column;
    font-weight: 600;
    padding: 1rem;

    & > * {
      margin-bottom: 2rem;
    }
  }
`

const RepoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem 0;

  &:hover {
    box-shadow: 0 0 10px rgba(0,0,0,.1);
  }

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

  .star {
    display: flex;
    align-items: flex-end;
    margin: 0 0 0 15px;
    color: #ccc;

    span {
      padding: 0;
    }
  }
`
