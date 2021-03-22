import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { loadSearchUser } from 'actions/SearchUserAction'
import { useHistory } from 'react-router-dom'

export default function Search () {
  const [textInput, setTextInput] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()

  const onChangeHandler = (e) => {
    setTextInput(e.target.value)
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    if (textInput !== '') {
      dispatch(loadSearchUser(textInput))
      const textInputEncoded = encodeURI(textInput)
      history.push(`/feed/${textInputEncoded}`)
    }
  }

  return (
    <StyledForm onSubmit={onSubmitForm}>
      <input value={textInput} onChange={onChangeHandler} type='text' placeholder='Search or jump to...' />
      <button>Search</button>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  input {
    width: 80%;
    height: 45px;
    font-size: inherit;
    padding: 0 0.5rem;

    &:focus {
      border-color: var(--text-secondary-color);
      outline: none;
      box-shadow: 0 0 10px rgba(20,20,20,.1);
    }
  }

  button {
    padding: 10px;
    font-weight: bold;
    color: var(--text-subtitle-color);
    background-color: var(--text-secondary-color);
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
  }
`
