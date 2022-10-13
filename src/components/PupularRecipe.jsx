import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import TitleBox from './TitleBox'
import RecipeCardList from './RecipeCardList'

const PupularRecipe = () => {
  const navigate = useNavigate()
  const [recipeArr, setRecipeArr] = useState([
    {
      recipeId: 0,
      title: '',
      subTitle: '',
      thumbnail: '',
      level: '',
      time: '',
      starScore: '',
      state: '',
      created_at: new Date(),
    },
  ])

  useEffect(() => {
    fetch('http://localhost:8080/yori_zip-server/MainController?m=hot')
      .then((response) => response.json())
      .then((response) => {
        const recipeArray = []
        response.map((el) =>
          recipeArray.push({
            recipeId: el.recipe_id,
            title: el.title,
            subTitle: el.subtitle,
            thumbnail: el.thumbnail,
            level: el.difficulty,
            time: el.time,
            starScore: el.star_score,
            state: el.state,
            created_at: new Date(el.created_at),
          }),
        )

        setRecipeArr(recipeArray)
      })
  }, [])

  return (
    <PupularRecipeContainer>
      <TitleBox
        title="Popular pecipes"
        subTitle="많이 찾으시는 레시피를 소개합니다"
        onClickEvent={() =>
          navigate('/recipelist', { state: { largeCategory: '인기' } })
        }
      />
      <RecipeCardList recipeArr={recipeArr} />
    </PupularRecipeContainer>
  )
}

const PupularRecipeContainer = styled.section`
  width: 1320px;
  height: 910px;
  margin-top: 110px;
`

export default PupularRecipe
