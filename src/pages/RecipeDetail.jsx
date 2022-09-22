import { useEffect, useState } from 'react'
import styled from 'styled-components'

import LocationPath from '../components/LocationPath'
import RecipeInfo from '../components/RecipeInfo'
import UserEval from '../components/UserEval'

import { dummyRecipeDetail } from '../dummy/termInfo'

const RecipeDetail = () => {
  const [simpleInfo, setSimpleInfo] = useState({
    recipeId: 0,
    title: '',
    subtitle: '',
    description: '',
    thumbnail: '',
    level: '',
    time: '',
    starScore: '',
    created_at: new Date(),
    userId: 0,
    nickname: '',
    profile: '',
  })
  const [ingredient, setIngredient] = useState({})
  const [recipeDetail, setRecipeDetail] = useState([])
  const [reple, setReple] = useState([])
  const [isBookMark, setIsBookMark] = useState()

  useEffect(() => {
    setSimpleInfo(dummyRecipeDetail.data)
    setIngredient(dummyRecipeDetail.ingredient)
    setRecipeDetail(dummyRecipeDetail.recipe_detail)
    setReple(dummyRecipeDetail.reple)
    setIsBookMark(dummyRecipeDetail.isBookMark)
  }, [])

  return (
    <RecipeDetailContainer>
      <LocationPath />
      <RecipeDetailFrame>
        <RecipeInfo
          simpleInfo={simpleInfo}
          ingredient={ingredient}
          recipeDetail={recipeDetail}
          isBookMark={isBookMark}
          setIsBookMark={setIsBookMark}
        />
        <UserEval reple={reple} />
      </RecipeDetailFrame>
    </RecipeDetailContainer>
  )
}

const RecipeDetailContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 80vh;
`
const RecipeDetailFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1350px;
`

export default RecipeDetail
