import styled from 'styled-components'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import LocationPath from '../components/LocationPath'
import { useEffect } from 'react'

const MyPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const publicUrl = process.env.PUBLIC_URL
  const navArr = [
    {
      name: '작성한 레시피',
      icon: `${publicUrl}/assets/recipeList.png`,
      address: 'myrecipe',
    },
    {
      name: '작성한 댓글',
      icon: `${publicUrl}/assets/commentList.png`,
      address: 'myreple',
    },
    {
      name: '개인정보 수정',
      icon: `${publicUrl}/assets/userInfo.png`,
      address: 'userinfo',
    },
  ]

  useEffect(() => {
    location.pathname === '/mypage' && navigate('/mypage/myrecipe')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  return (
    <MyPageContainer>
      <LocationPath />
      <MyPageFrame>
        <SubNav>
          {navArr.map((el) => (
            <NavBtnBox
              where={location.pathname === `/mypage/${el.address}`}
              key={el.name}
              onClick={() => navigate(`/mypage/${el.address}`)}
            >
              <NavIcon src={el.icon} />
              {el.name}
              {(location.pathname === `/mypage/${el.address}` ||
                location.pathname === `/mypage/${el.address}/passwordCheck` ||
                location.pathname ===
                  `/mypage/${el.address}/userinfomodify`) && (
                <Arrow src={`${publicUrl}/assets/rightArrow.png`} />
              )}
            </NavBtnBox>
          ))}
        </SubNav>
        <Outlet />
      </MyPageFrame>
    </MyPageContainer>
  )
}

const MyPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 70vh;
`
const MyPageFrame = styled.div`
  display: flex;
  width: 100%;
  min-height: 70vh;
`

const SubNav = styled.ul`
  width: 330px;
  padding: 15px 10px 0 15px;
`

const NavBtnBox = styled.li`
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
  white-space: nowrap;
  margin: 20px 0;
  opacity: ${({ where }) => (where ? 1 : 0.7)};
  cursor: pointer;
`

const NavIcon = styled.img`
  width: 51px;
  height: 51px;
  margin-right: 10px;
`

const Arrow = styled.img`
  width: 35px;
`

export default MyPage
