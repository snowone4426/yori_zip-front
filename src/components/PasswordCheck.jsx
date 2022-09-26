import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const PasswordCheck = () => {
  const navigation = useNavigate()
  const [prePassword, setPrePassword] = useState('')

  const inputHanlder = (key, value) => {
    setPrePassword(value)
    navigation('/mypage/userinfo/userinfomodify', { replace: true })
  }

  return (
    <PasswordCheckContainer>
      <Title>비밀번호 확인</Title>
      <InputFrame>
        <InnerInput
          type="text"
          value={prePassword}
          onChange={inputHanlder}
          placeholder="비밀번호를 입력해 주세요..."
        />
      </InputFrame>
    </PasswordCheckContainer>
  )
}

const PasswordCheckContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 150px;
`

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 30px;
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

export default PasswordCheck
