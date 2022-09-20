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
        <NextBtn
          onClick={() =>
            navigate('/signup/userinfo', {
              state: { termAgree: isChecked },
              replace: true,
            })
          }
        >
          다음
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
  margin-bottom: 70px;
`

const AllTermAgree = styled.button`
  width: 110px;
  height: 36px;
  font-size: 20px;
  color: white;
  margin-left: 10px;
  background-color: #292929;
`

const NextBtn = styled(AllTermAgree)``

export default SignUpTermsList
