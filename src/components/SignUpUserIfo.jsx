import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import UserInfoInput from './UserInfoInput'
import ProfileInput from './ProfileInput'
import QuestionSelect from './QuestionSelect'

const SignUpUserInfo = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    profile: '',
    nickname: '',
    phone: '',
    gender: 'M',
    question: '',
    answer: '',
    type: 'customer',
  })

  const inputListArr = [
    {
      type: 'email',
      name: 'email',
      placeholder: '어떤 이메일로 가입하시겠어요?',
      validationStr: [
        '',
        '이미 가입된 이메일 입니다',
        '이메일 형식이 잘못되었습니다',
      ],
    },
    {
      type: 'password',
      name: 'password',
      placeholder: '비밀번호는 어떻게 설정해 드릴까요',
      validationStr: [
        '',
        '비밀번호 형식이 잘못되었습니다',
        '비밀번호가 다릅니다',
      ],
    },
    {
      type: 'text',
      name: 'nickname',
      placeholder: '사이트에서 어떻게 불리고 싶으신가요?',
      validationStr: ['', '이미 그렇게 불리시는 분이 있어요'],
    },
    {
      type: 'tel',
      name: 'phone',
      placeholder: '전화번호를 입력해 주세요',
      validationStr: [''],
    },
  ]

  useEffect(() => {
    if (
      !(!!location.state && Object.keys(location.state).includes('termAgree'))
    )
      navigate('/', { replce: true })
  }, [])

  const inputHanlder = (key, value) => {
    setUserInfo({ ...userInfo, [key]: value })
  }

  const submitHanlder = () => {
    if (!Object.values(userInfo).includes('')) {
      fetch(
        'http://localhost:8080/yori_zip-server/SignUpController?su=signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: userInfo.email,
            password: userInfo.password,
            profile: '123',
            nickname: userInfo.nickname,
            gender: userInfo.gender,
            question: userInfo.question,
            answer: userInfo.answer,
            type: 'C',
          }),
        },
      )
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            navigate('/signin', { replace: true, state: { where: 'signup' } })
          } else {
            alert('회원가입에 실패하였습니다')
          }
        })
    }
  }

  return (
    <SignUpUserInfoContainer>
      <Logo />
      <ProfileInput onChangeEvent={inputHanlder} />
      <InputContainer>
        {inputListArr.map((el, idx) => (
          <UserInfoInput
            onChangeEvent={inputHanlder}
            {...el}
            key={idx + el.type}
          />
        ))}
        <QuestionSelect onChangeEvent={inputHanlder} />
        <GenderChoiceContainer>
          <GenderBtn
            selected={userInfo.gender === 'M'}
            onClick={() => inputHanlder('gender', 'M')}
          >
            남
          </GenderBtn>
          <GenderBtn
            selected={userInfo.gender === 'F'}
            onClick={() => inputHanlder('gender', 'F')}
          >
            여
          </GenderBtn>
        </GenderChoiceContainer>
        <SubmitContainer>
          <SubmitBtn
            onClick={submitHanlder}
            isClear={!Object.values(userInfo).includes('')}
          >
            회원가입
          </SubmitBtn>
        </SubmitContainer>
      </InputContainer>
    </SignUpUserInfoContainer>
  )
}

const SignUpUserInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 940px;
  border: 2px solid #d4d4d4;
  margin-top: 20px;
  padding: 20px;
`

const Logo = styled.img`
  width: 230px;
  height: 60px;
  margin-top: 20px;
  background-color: black;
`

const InputContainer = styled.ul`
  width: 520px;
`

const SubmitContainer = styled.li`
  display: flex;
  justify-content: center;
`

const SubmitBtn = styled.button`
  width: 400px;
  height: 60px;
  font-size: 36px;
  font-weight: 600;
  color: #ffffff;
  border-radius: 10px;
  margin-top: 29px;
  opacity: ${({ isClear }) => (isClear ? 1 : 0.8)};
  background-color: #3f3f3f;
`

const GenderChoiceContainer = styled.li`
  display: flex;
  justify-content: space-around;
  margin-top: 29px;
  padding: 0 40px;
`

const GenderBtn = styled.button`
  width: 160px;
  height: 70px;
  font-size: 24px;
  font-weight: 600;
  color: #838383;
  border-radius: 16px;
  background-color: ${({ selected }) => (selected ? '#e2e1e1' : '#ECECEC')};
`

export default SignUpUserInfo
