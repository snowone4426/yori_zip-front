import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const WeekThemeList = () => {
  const publicUrl = process.env.PUBLIC_URL
  const [recipeList, setRecipeList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setRecipeList([
      {
        recipeId: 0,
        title: '샤크슈카',
        subtitle: '마그레브의 달걀 요리',
        thumbnail: `${publicUrl}/assets/샤크슈카.jpg`,
      },
      {
        recipeId: 1,
        title: '호박파이',
        subtitle: '',
        thumbnail: `${publicUrl}/assets/호박파이.jpg`,
      },
      {
        recipeId: 2,
        title: '당근 케이크',
        subtitle: '',
        thumbnail: `${publicUrl}/assets/당근케이크.jpg`,
      },
      {
        recipeId: 3,
        title: '고기구이',
        subtitle: '불맛의 진수',
        thumbnail: `${publicUrl}/assets/고기구이.jpg`,
      },
    ])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <WeekThemeListContainer>
      <LargeCard
        onClick={() =>
          navigate(`/recipedetail/${!!recipeList[0] && recipeList[0].recipeId}`)
        }
      >
        {!!recipeList[0] && (
          <LargeImg src={recipeList[0].thumbnail} alt={recipeList[0].title} />
        )}
      </LargeCard>
      <SmallCard
        onClick={() =>
          navigate(`/recipedetail/${!!recipeList[1] && recipeList[1].recipeId}`)
        }
      >
        {!!recipeList[1] && (
          <SmallCardImg
            src={recipeList[1].thumbnail}
            alt={recipeList[1].title}
          />
        )}
      </SmallCard>
      <SmallCard
        onClick={() =>
          navigate(`/recipedetail/${!!recipeList[2] && recipeList[2].recipeId}`)
        }
      >
        {!!recipeList[2] && (
          <SmallCardImg
            src={recipeList[2].thumbnail}
            alt={recipeList[2].title}
          />
        )}
      </SmallCard>
      <MidiumCard
        onClick={() =>
          navigate(`/recipedetail/${!!recipeList[3] && recipeList[3].recipeId}`)
        }
      >
        {!!recipeList[3] && (
          <MiddleCardImg
            src={recipeList[3].thumbnail}
            alt={recipeList[3].title}
          />
        )}
      </MidiumCard>
    </WeekThemeListContainer>
  )
}

const WeekThemeListContainer = styled.article`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 30px;
  width: 1220px;
  height: 600px;
  margin-top: 60px;
`

const LargeCard = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/2;
  grid-row: 1/3;
  overflow: hidden;
  cursor: pointer;
`
const LargeImg = styled.img`
  height: 100%;
`

const MidiumCard = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2/4;
  grid-row: 2/3;
  overflow: hidden;
  cursor: pointer;
`
const MiddleCardImg = styled.img`
  width: 100%;
`

const SmallCard = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
`

const SmallCardImg = styled.img`
  width: 100%;
`

export default WeekThemeList
