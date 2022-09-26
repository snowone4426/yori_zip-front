import styled from 'styled-components'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const UserInfo = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    location.pathname === '/mypage/userinfo' &&
      navigate('/mypage/userinfo/passwordCheck', { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  return (
    <UserInfoContainer>
      <Outlet />
    </UserInfoContainer>
  )
}

const UserInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  width: 100%;
  padding: 0 40px;
  border-left: 1px solid #d8d8d8;
`

export default UserInfo
