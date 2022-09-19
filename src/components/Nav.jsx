import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import CategoryList from './CategoryList'
import RecentView from './RecentView'

const Nav = ({ isLogin, gender, id, signoutHanlder }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [isHover, setIsHover] = useState('')
  const [isSubNavOpen, setIsSubNavOpen] = useState('')
  const navigate = useNavigate()
  const publicUrl = process.env.PUBLIC_URL

  const searchOpenHanlder = () => {
    if (searchText) {
      moveHanlder('/recipelist', { type: 'search', word: searchText })
    }
    setIsSearchOpen(!isSearchOpen)
    setSearchText('')
  }

  const searchHanlder = (e) => {
    setSearchText(e.target.value)
  }

  const searchActiveHandler = (e) => {
    if (e.key === 'Enter') {
      moveHanlder('/recipelist', { type: 'search', word: searchText })
      setIsSearchOpen(!isSearchOpen)
      setSearchText('')
    }
  }

  const moveHanlder = (location, params = {}) => {
    if (Object.keys(params).length === 0) navigate(location)
    else navigate(location, { state: params })
  }

  const hoverHanlder = (e) => {
    setIsHover(e.target.name)
  }

  const subNavOpenHanlder = (e) => {
    if (e.target.name === isSubNavOpen) setIsSubNavOpen('')
    else setIsSubNavOpen(e.target.name)
  }

  //\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
  ///\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
  //\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

  let mypageGender =
    gender.length !== 0 && gender === 'M'
      ? `${publicUrl}/assets/mypage_male.png`
      : `${publicUrl}/assets/mypage_female.png`

  let btnSelector = (
    <SignBtn onClick={() => moveHanlder('/signin')}>로그인</SignBtn>
  )
  if (isLogin) {
    btnSelector = (
      <React.Fragment>
        <SignBtn onClick={() => moveHanlder(`/mypage/${id}`)}>
          <img src={mypageGender} alt="mypage" />
        </SignBtn>
        <SignBtn onClick={signoutHanlder}>로그아웃</SignBtn>
      </React.Fragment>
    )
  }

  //\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
  ///\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
  //\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

  return (
    <NavContainer>
      <UpNav>
        <NavLogo src="" alt="logo" onClick={() => moveHanlder(`/`)} />
        <BtnContainer>
          <SearchInputLabel isSearchOpen={isSearchOpen}>
            <SearchInput
              type="text"
              value={searchText}
              onChange={searchHanlder}
              isSearchOpen={isSearchOpen}
              onKeyDown={searchActiveHandler}
            />
            <SearchImg
              onClick={searchOpenHanlder}
              src={`${publicUrl}/assets/search.png`}
              alt="search"
            />
          </SearchInputLabel>
          {btnSelector}
        </BtnContainer>
      </UpNav>
      <DownNav onMouseLeave={() => setIsSubNavOpen('')}>
        <CategoryBtn
          onClick={subNavOpenHanlder}
          onMouseEnter={hoverHanlder}
          onMouseLeave={() => setIsHover('')}
          name="category"
          isHover={isHover}
          isSubNavOpen={isSubNavOpen}
        >
          카테고리
        </CategoryBtn>
        <MiddleLine />
        <SubBtn
          onClick={subNavOpenHanlder}
          onMouseEnter={hoverHanlder}
          onMouseLeave={() => setIsHover('')}
          name="recentRecipe"
          isHover={isHover}
          isSubNavOpen={isSubNavOpen}
        >
          최근 본 레시피
        </SubBtn>
        <SubBtn
          onClick={() => moveHanlder('/createrecipe', { id: id })}
          onMouseEnter={hoverHanlder}
          onMouseLeave={() => setIsHover('')}
          name="createRecipe"
          isHover={isHover}
        >
          레시피 등록
        </SubBtn>
        {isSubNavOpen && (
          <SubNavContainer>
            {isSubNavOpen === 'category' && (
              <CategoryList where="nav" setIsSubNavOpen={setIsSubNavOpen} />
            )}
            {isSubNavOpen === 'recentRecipe' && (
              <RecentView setIsSubNavOpen={setIsSubNavOpen} />
            )}
          </SubNavContainer>
        )}
      </DownNav>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 150px;
  box-shadow: 0 3px 20px 0 black;
  background-color: white;
`

const UpNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90px;
`

const NavLogo = styled.img`
  width: 200px;
  height: 80px;
  border-radius: 10px;
  margin-left: 5px;
  background-color: black;
  cursor: pointer;
`

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
`

const SearchInputLabel = styled.label`
  box-sizing: border-box;
  position: relative;
  bottom: 10px;
  display: flex;
  align-items: flex-end;
  height: 90px;
  border-bottom: ${({ isSearchOpen }) =>
    isSearchOpen ? '2px solid #585858' : 'none'};
  margin-right: 3px;
  padding-bottom: ${({ isSearchOpen }) => (isSearchOpen ? '3px' : '5px')};
`

const SearchImg = styled.img`
  position: relative;
  bottom: 2px;
  width: 50px;
  height: 50px;
`

const SearchInput = styled.input`
  display: ${({ isSearchOpen }) => (isSearchOpen ? 'default' : 'none')};
  width: 400px;
  font-size: 25px;
  text-align: right;
  margin: 0 5px 10px 10px;
`

const SignBtn = styled.button`
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;

  & > img {
    position: relative;
    bottom: 3px;
    height: 65px;
  }
`

const DownNav = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 15px;
`

const CategoryBtn = styled.button`
  font-size: 32px;
  font-weight: 500;
  color: ${({ isSubNavOpen, isHover, name }) =>
    isHover === name || isSubNavOpen === name ? '#755143' : 'black'};
  border-bottom: ${({ isSubNavOpen, name }) =>
    isSubNavOpen === name ? '1.7px solid #755143' : 'none'};
`

const MiddleLine = styled.div`
  height: 28px;
  border-left: 2px solid #b8b8b8;
  margin: 5px 15px 0;
`

const SubBtn = styled.button`
  font-size: 24px;
  color: ${({ isSubNavOpen, isHover, name }) =>
    isHover === name || isSubNavOpen === name ? '#755143' : '#4e4e4e'};
  margin-right: 15px;
  border-bottom: ${({ isSubNavOpen, name }) =>
    isSubNavOpen === name ? '1.7px solid #755143' : 'none'};
`

const SubNavContainer = styled.div`
  position: fixed;
  top: 150px;
  left: 0;
  width: 100%;
  height: 212px;
  border-top: 1px solid #b8b8b8;
  background-color: white;
`

export default Nav
