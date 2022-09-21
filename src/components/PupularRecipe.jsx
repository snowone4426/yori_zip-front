import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import TitleBox from './TitleBox'
import RecipeCardList from './RecipeCardList'

import { dummyMainArr } from '../dummy/termInfo'

const PupularRecipe = () => {
  const navigate = useNavigate()
  const publicUrl = process.env.PUBLIC_URL
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
    setRecipeArr(dummyMainArr)
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
