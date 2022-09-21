import { useState } from 'react'
import styled from 'styled-components'

const UserInfoInput = ({
  onChangeEvent = (key, value) => {},
  type = '',
  placeholder = '',
  validationStr = '',
  name = '',
}) => {
  const [inputValue, setInputValue] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')

  const validation = () => {
    switch (name) {
      case 'email':
        if (inputValue === 'test@test.com') return 1
        else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(inputValue))
          return 0
        else return 2
      case 'password':
        if (inputValue !== passwordCheck) return 2
        else if (
          /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/.test(
            inputValue,
          )
        )
          return 0
        else return 1
      case 'nickname':
        if (inputValue !== 'test') return 0
        else return 1
      default:
        return 0
    }
  }

  const inputHanlder = (e) => {
    setInputValue(e.target.value)
  }

  const uploadHandler = () => {
    if (validation() === 0) {
      onChangeEvent(name, inputValue)
    }
  }

  return (
    <UserInfoInputContainer>
      <InputFrame>
        <InnerInput
          type={type}
          value={inputValue}
          onChange={inputHanlder}
          onBlur={uploadHandler}
          placeholder={placeholder}
        />
      </InputFrame>
      {name === 'password' && (
        <InputFrame>
          <InnerInput
            type={type}
            value={passwordCheck}
            onBlur={uploadHandler}
            onChange={(e) => setPasswordCheck(e.target.value)}
            placeholder="다시 한번 확인해 주세요"
          />
        </InputFrame>
      )}
      <ValidationErr validation={validation()}>
        {!!inputValue.length && validationStr[validation()]}
      </ValidationErr>
    </UserInfoInputContainer>
  )
}

const UserInfoInputContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InputFrame = styled.label`
  display: flex;
  width: 400px;
  height: 70px;
  margin-top: 7px;
  background-color: #ececec;
  cursor: text;
`

const InnerInput = styled.input`
  width: 400px;
  font-size: 20px;
  color: 838383;
  padding: 20px;
`

const ValidationErr = styled.div`
  visibility: ${({ validation }) => (validation === 0 ? 'hidden' : 'default')};
  align-self: flex-start;
  height: 17px;
  font-weight: 600;
  color: red;
  opacity: 0.8;
  margin: 5px 0 0 75px;
`

export default UserInfoInput
