import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import SignUpTerms from './SignUpTerms'

const SignUpTermsList = () => {
  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState([false, false])

  const checkHandler = (value, idx) => {
    const preChecked = [...isChecked]
    preChecked[idx] = !value
    setIsChecked(preChecked)
  }

  const allAgree = () => {
    if (isChecked.includes(false)) setIsChecked([true, true])
    else setIsChecked([false, false])
  }

  const nextHanlder = () => {
    if (!isChecked.includes(false)) {
      navigate('/signup/userinfo', {
        state: { termAgree: isChecked },
        replace: true,
      })
    }
  }

  return (
    <SignUpTermsListContainer>
      <TermsListTitle>Logo 서비스 이용 약관</TermsListTitle>
      {isChecked.map((el, idx, elArr) => (
        <SignUpTerms
          isChecked={elArr}
          idx={idx}
          checkHandler={checkHandler}
          key={idx + el.toString()}
        />
      ))}
      <BtnContainer>
        <AllTermAgree onClick={allAgree}>전부 동의</AllTermAgree>
        <NextBtn onClick={nextHanlder} isNext={!isChecked.includes(false)}>
          다음
          <Rhombus />
        </NextBtn>
      </BtnContainer>
    </SignUpTermsListContainer>
  )
}

const SignUpTermsListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 940px;
  margin-top: 30px;
`

const TermsListTitle = styled.div`
  align-self: flex-start;
  font-size: 30px;
  font-weight: 600;
  padding-left: 20px;
  margin-bottom: 20px;
  background-color: #f1f1f1;
`

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 0 35px 70px 0;
`

const AllTermAgree = styled.button`
  width: 110px;
  height: 36px;
  font-size: 20px;
  color: white;
  margin-left: 10px;
  background-color: #292929;
`

const NextBtn = styled(AllTermAgree)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: ${({ isNext }) => (isNext ? 1 : 0.5)};
`

const Rhombus = styled.div`
  position: relative;
  top: 0.15px;
  left: 12.7px;
  width: 25.7px;
  height: 25.7px;
  transform: rotate(45deg);
  background-color: #292929;
`

export default SignUpTermsList
