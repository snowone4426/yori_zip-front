import styled from 'styled-components'

import SignUpTerms from './SignUpTerms'

const SignUpTermsList = () => {
  return (
    <SignUpTermsListContainer>
      <TermsListTitle>Logo 서비스 이용 약관</TermsListTitle>
      <SignUpTerms />
      <SignUpTerms />
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
  padding-left: 30px;
  margin-bottom: 20px;
  background-color: #f1f1f1;
`

export default SignUpTermsList
