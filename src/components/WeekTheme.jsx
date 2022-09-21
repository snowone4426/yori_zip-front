import styled from 'styled-components'

import WeekThemeList from './WeekThemeList'
import TitleBox from './TitleBox'
import { useNavigate } from 'react-router-dom'

const WeekTheme = () => {
  const navigate = useNavigate()
  const weeklyTheme = ''
  return (
    <WeekThemeListContainer>
      <TitleBox
        title="This week`s theme"
        subTitle="이번주 테마 레시피를 둘러보세요!"
        onClickEvent={() =>
          navigate('/recipelist/search', { state: { search: weeklyTheme } })
        }
      />
      <WeekThemeList />
    </WeekThemeListContainer>
  )
}

const WeekThemeListContainer = styled.section`
  width: 1260px;
  height: 720px;
  margin-top: 100px;
`

export default WeekTheme
