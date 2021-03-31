import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadUserProfile } from 'actions/SearchUserAction'
import Nav from 'components/Nav'
import Wrapper from 'components/Wrapper'
import Footer from 'components/Footer'
import Spinner from 'components/Spinner'
import UserDetails from 'components/UserDetails'
import RepoDetails from 'components/RepoDetails'

export default function SearchResults () {
  const dispatch = useDispatch()
  const location = useLocation()
  const pathId = location.pathname.split('/')[2]

  useEffect(() => {
    if (pathId !== '') {
      dispatch(loadUserProfile(pathId))
    }
  }, [dispatch, pathId])

  const { userProfile, userRepos, loading } = useSelector((state) => state.user)

  return (
    <>
      <Nav />
      {loading
        ? <Spinner />
        : (
          <Wrapper>

            <UserDetails
              avatarUrl={userProfile.avatar_url}
              name={userProfile.name}
              login={userProfile.login}
              htmlUrl={userProfile.html_url}
              publicRepos={userProfile.public_repos}
              followers={userProfile.followers}
              following={userProfile.following}
              location={userProfile.location}
              email={userProfile.email}
              blog={userProfile.blog}
              twitterUsername={userProfile.twitter_username}
            />

            <h3>Latest Repos</h3>

            {userRepos
              .sort((a, b) => (a.updated_at < b.updated_at) ? 1 : -1)
              .map(repo => (
                <RepoDetails
                  key={repo.id}
                  cloneUrl={repo.clone_url}
                  name={repo.name}
                  description={repo.description}
                  language={repo.language}
                  rating={repo.stargazers_count}
                  license={repo.license}
                  updatedAt={repo.updated_at}
                />
              ))}

            <Footer />
          </Wrapper>
          )}
    </>
  )
}
