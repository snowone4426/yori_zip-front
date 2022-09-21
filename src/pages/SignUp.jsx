import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import SignUpHeader from '../components/SignUpHeader'

const SignUp = () => {
  return (
    <SignUpContainer>
      <SignUpHeader />
      <Outlet />
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
