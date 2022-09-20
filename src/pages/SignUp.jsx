import styled from 'styled-components'

import SignUpHeader from '../components/SignUpHeader'
import SignUpTermsList from '../components/SignUpTermsList'

const SignUp = () => {
  return (
    <SignUpContainer>
      <SignUpHeader />
      <SignUpTermsList />
    </SignUpContainer>
  )
}

const SignUpContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 80vh;
`

export default SignUp
