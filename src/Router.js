import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Main from './pages/Main'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import RecipeList from './pages/RecipeList'
import RecipeDetail from './pages/RecipeDetail'
import CreateRecipe from './pages/CreateRecipe'
import MyPage from './pages/MyPage'
import styled from 'styled-components'
import SignUpTermsList from './components/SignUpTermsList'
import SignUpUserInfo from './components/SignUpUserIfo'

const Router = () => {
  const [userInfo, setUserInfo] = useState({
    id: 1,
    email: 'snowone4426@gmail.com',
    gender: 'M',
    nick: 'snowone',
    phone: '010-2084-9913',
  })

  const signinHanlder = () => {
    setUserInfo({
      id: 1,
      email: 'snowone4426@gmail.com',
      gender: 'M',
      nick: 'snowone',
      phone: '010-2084-9913',
    })
  }

  const signoutHanlder = () => {
    setUserInfo({})
  }

  let isLogin = false
  if (Object.keys(userInfo).length !== 0) {
    isLogin = true
  }

  return (
    <RouterContainer>
      <Nav
        isLogin={isLogin}
        gender={Object.keys(userInfo).length !== 0 ? userInfo.gender : ''}
        id={Object.keys(userInfo).length !== 0 ? userInfo.id : 0}
        signoutHanlder={signoutHanlder}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/signin"
          element={<SignIn signinHanlder={signinHanlder} />}
        />
        <Route path="/signup" element={<SignUp />}>
          <Route path="/signup/terms" element={<SignUpTermsList />} />
          <Route path="/signup/userinfo" element={<SignUpUserInfo />} />
        </Route>
        <Route path="/recipelist" element={<RecipeList />} />
        <Route path="/recipedetail/:recipeId" element={<RecipeDetail />} />
        <Route path="/createrecipe" element={<CreateRecipe />} />
        <Route path="/mypage/:userId" element={<MyPage />} />
      </Routes>
      <Footer />
    </RouterContainer>
  )
}

const RouterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  margin-top: 150px;
`

export default Router
