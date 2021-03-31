import styled from 'styled-components'
import { GoRepo, GoStar, GoLaw, GoPrimitiveDot } from 'react-icons/go'
import TimeAgo from 'hooks/TimeAgo'
import getLanguageColor from 'hooks/getLanguage'

export default function RepoDetails ({
  cloneUrl,
  name,
  description,
  language,
  rating,
  license,
  updatedAt
}) {
  return (
    <RepoContainer>
      <div>
        <GoRepo />
        <a href={cloneUrl} target='blank'>{name}</a>
      </div>
      <span>{description}</span>
      <RepoInfo>
        <span>
          <GoPrimitiveDot style={{ color: getLanguageColor(language) }} />
          {language}
        </span>
        <div className='star'>
          <GoStar />
          <span>{rating}</span>
        </div>
        <span>
          {license
            ? (
              <span>
                <GoLaw />
                {license.name}
              </span>
              )
            : ''}
        </span>
        <span>
          Updated {' '}
          <TimeAgo timestamp={new Date(updatedAt).getTime()} />
        </span>
      </RepoInfo>
    </RepoContainer>
  )
}

const RepoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--app-hover-color);
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem 0;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 10px rgba(0,0,0,.1);
  }

  a {
    color: var(--text-link-color);
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    padding: 1rem;
    font-size: 0.8rem;
    color: var(--text-small-color);
  }
`
const RepoInfo = styled.div`
  display: flex;
  align-items: center;

  .star {
    display: flex;
    align-items: flex-end;
    margin: 0 0 0 15px;
    color: var(--app-hover-color);

    span {
      padding: 0;
    }
  }
`
