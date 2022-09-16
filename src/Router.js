import { Route, Routes } from 'react-router-dom'

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

const Router = () => {
  return (
    <RouterContainer>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
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
  width: 100vw;
  min-height: 100vh;
  background-color: skyblue;
`

export default Router
