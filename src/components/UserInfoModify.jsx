import styled from 'styled-components'
import React, { useState } from 'react'

import ProfileInput from './ProfileInput'
import UserInfoInput from './UserInfoInput'

import { dummyUserInfo } from '../dummy/termInfo'

const UserInfoModify = () => {
  const [userInfo, setUserInfo] = useState({
    userId: dummyUserInfo.userId,
    email: dummyUserInfo.email,
    profile: dummyUserInfo.profile,
    password: '',
    nickname: '',
    phone: '',
  })
  const inputInfo = [
    {
      type: 'text',
      placeholder: '변경하실 비밀번호를 입력해 주세요...',
      validationStr: '',
      name: 'password',
      disable: false,
      value: '',
    },
    {
      type: 'text',
      placeholder: '변경하실 닉네임을 입력해 주세요...',
      validationStr: '',
      name: 'nickname',
      disable: false,
      value: '',
    },
    {
      type: 'text',
      placeholder: '변경하실 전화번호를 입력해 주세요...',
      validationStr: '',
      name: 'phone',
      disable: false,
      value: '',
    },
  ]

  const inputHanlder = (key, value) => {
    setUserInfo({ ...userInfo, [key]: value })
  }

  return (
    <React.Fragment>
      <ProfileInput onChangeEvent={inputHanlder} value={userInfo.profile} />
      <EmailFrame>{userInfo.email}</EmailFrame>
      {inputInfo.map((el, idx) => (
        <UserInfoInput
          onChangeEvent={inputHanlder}
          type={el.type}
          placeholder={el.placeholder}
          validationStr={el.validationStr}
          name={el.name}
          disable={el.disable}
          value=""
          key={idx + el.name}
        />
      ))}
      <SubmitContainer>
        <SubmitBtn>정보 수정</SubmitBtn>
      </SubmitContainer>
    </React.Fragment>
  )
}

const EmailFrame = styled.div`
  display: flex;
  width: 400px;
  height: 70px;
  font-size: 20px;
  color: 838383;
  margin-top: 7px;
  padding: 20px;
  background-color: #ececec;
`

const SubmitContainer = styled.li`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
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

export default UserInfoModify
