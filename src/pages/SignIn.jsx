import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const SignIn = ({ signinHanlder }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [inputInfo, setInputInfo] = useState({ email: '', password: '' })

  useEffect(() => {
    if (
      !location.state ||
      !['nav', 'signup', 'comment', 'bookmark'].includes(location.state.where)
    ) {
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const inputHanlder = (e) => {
    setInputInfo((inputInfo) => {
      return { ...inputInfo, [e.target.id]: e.target.value }
    })
  }

  const submitHanlder = () => {
    signinHanlder(inputInfo.email, inputInfo.password)
    setInputInfo({ email: '', password: '' })
  }

  return (
    <SignInContainer>
      <InputContainer>
        <LoginTitle>Logo</LoginTitle>
        <InputLabel htmlFor="email">
          <LoginInput
            type="text"
            id="email"
            value={inputInfo.email}
            placeholder="EMAIL"
            onChange={inputHanlder}
          />
        </InputLabel>
        <InputLabel htmlFor="password">
          <LoginInput
            type="password"
            id="password"
            value={inputInfo.password}
            placeholder="PASSWORD"
            onChange={inputHanlder}
          />
        </InputLabel>
        <LinkContainer>
          <MiniBtn onClick={() => navigate('/signup/terms')}>회원가입</MiniBtn>
          <MiniBtn>비밀번호 찾기</MiniBtn>
        </LinkContainer>
        <SubmitBtn inputInfo={inputInfo} onClick={submitHanlder}>
          로그인
        </SubmitBtn>
      </InputContainer>
    </SignInContainer>
  )
}

const SignInContainer = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
`

const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 470px;
`

const LoginTitle = styled.header`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 40px;
`

const InputLabel = styled.label`
  display: flex;
  align-items: center;
  width: 450px;
  height: 70px;
  border: 2px solid #bb905b;
  border-bottom: ${({ htmlFor }) =>
    htmlFor === 'id' ? '0px' : '2px solid #bb905b'};
  padding: 10px;
`

const LoginInput = styled.input`
  font-size: 32px;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 450px;
  padding: 5px 2px;
`

const MiniBtn = styled.div`
  font-size: 15px;
  font-weight: 600px;
  color: #665e5c;
  margin-left: 4px;
  cursor: pointer;
`

const SubmitBtn = styled.button`
  width: 450px;
  height: 54px;
  font-size: 40px;
  color: #f1f1f1;
  border-radius: 5px;
  background-color: ${({ inputInfo }) =>
    inputInfo.email.length && inputInfo.password.length
      ? '#9F6255'
      : '#958380'};
`

export default SignIn
