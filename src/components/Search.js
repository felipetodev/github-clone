import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { loadSearchUser } from '../actions/SearchUserAction'

export default function Search () {
  const [textInput, setTextInput] = useState('')

  const dispatch = useDispatch()

  const onChangeHandler = (e) => {
    setTextInput(e.target.value)
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    textInput !== ''
      ? dispatch(loadSearchUser(textInput))
      : console.warn('Campo Requerido ⚠️')
  }

  return (
    <StyledForm onSubmit={onSubmitForm}>
      <input value={textInput} onChange={onChangeHandler} type='text' />
      <button>Search</button>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  input {
    height: 35px;
    font-size: inherit;
    padding: 0 0.5rem;
  }

  button {
    padding: 10px;
    font-weight: bold;
    color: white;
    background-color: crimson;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
  }
`
