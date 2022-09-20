import styled from 'styled-components'

import WeekTheme from '../components/WeekTheme'
import PupularRecipe from '../components/PupularRecipe'
import Banner from '../components/Banner'

const Main = () => {
  return (
    <MainContainer>
      <Banner />
      <WeekTheme />
      <PupularRecipe />
    </MainContainer>
  )
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 80vh;
`

export default Main
