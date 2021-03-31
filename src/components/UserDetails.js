import styled from 'styled-components'
import { AiOutlineTwitter } from 'react-icons/ai'
import { GoLocation, GoOrganization, GoMail, GoLink } from 'react-icons/go'

export default function UserDetails ({
  avatarUrl,
  name,
  login,
  htmlUrl,
  publicRepos,
  following,
  followers,
  location,
  email,
  blog,
  twitterUsername
}) {
  return (
    <Container>
      <Avatar>
        <img src={avatarUrl} alt={name} />
        <h1>{name}</h1>
        <h4>{login}</h4>
        <a href={htmlUrl} target='blank'>View Github Profile</a>
      </Avatar>
      <UserStyled>
        <div className='followers'>
          <span>Repositories: {publicRepos}</span>
          <span>
            <GoOrganization /> Followers:{' '}
            {followers}
          </span>
          <span>Following: {following}</span>
        </div>
        <div className='user__details'>
          <span>
            <GoLocation />
            {location || 'Nowhere'}
          </span>
          <span>
            <GoMail />
            {email || 'No email'}
          </span>
          {blog
            ? (
              <span>
                <GoLink />
                <a href={blog} target='blank'>
                  {blog}
                </a>
              </span>)
            : ''}
          {twitterUsername
            ? (
              <span>
                <AiOutlineTwitter />
                <a href={`https://twitter.com/${twitterUsername}`} target='blank'>
                  @{twitterUsername}
                </a>
              </span>)
            : ''}
        </div>
      </UserStyled>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--app-hover-color);
  padding: 1rem;
  margin-top: 3rem;
  border-radius: 10px;
  margin-bottom: 1rem;

  img {
    width: 250px;
    border-radius: 50%;
  }

  a {
    padding: 0.5rem 1rem;
    border-radius: 10px;
    border: 1px solid var(--app-hover-color);
    background-color: var(--btn-background-color);
    color: inherit;
    cursor: pointer;

    &:hover {
      background-color: var(--btn-background-hover-color);
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 90%;

    img {
      width: 90%;
      margin: 0 auto;
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
    padding: 0 1rem;
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
    color: var(--text-small-color);
  }

  a {
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }
`

const UserStyled = styled.div`
  .followers {
    display: flex;
    justify-content: flex-end;
    font-weight: 600;
    padding: 1rem;
    color: var(--text-detail-color);

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

    & > *:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`
