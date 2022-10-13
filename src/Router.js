import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({
    gender: 'M',
    isLogin: false,
  })

  const signinHanlder = (email, password) => {
    fetch('http://localhost:8080/yori_zip-server/SignInController?si=signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          const userObj = {
            gender: response.gender,
            isLogin: response.success,
          }

          setUserInfo(userObj)
          navigate('/')
        } else {
          alert('아이디 또는 비밀번호가 다릅니다')
        }
      })
  }

  const signoutHanlder = () => {
    fetch('http://localhost:8080/yori_zip-server/NavController?n=signout')
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          setUserInfo({})
          navigate('/')
        }
      })
  }

  return (
    <RouterContainer>
      <Nav
        isLogin={userInfo.isLogin}
        gender={Object.keys(userInfo).length !== 0 ? userInfo.gender : ''}
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
        <Route path="/recipelist/*" element={<RecipeList />} />
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
