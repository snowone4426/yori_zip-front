import styled from 'styled-components'

import LocationPath from '../components/LocationPath'
import RecipeInfoInput from '../components/RecipeInfoInput'
import RecipeDetailInput from '../components/RecipeDetailInput'
import IngredientInput from '../components/IngredientInput'
import { useState } from 'react'

const CreateRecipe = () => {
  const [recipeInfo, setRecipeInfo] = useState({
    title: '',
    subtitle: '',
    description: '',
    thumbnail: '',
    level: '',
    time: '',
  })
  const [detailArr, setDetailArr] = useState([
    { detailid: 1, photo: '', description: '' },
  ])
  const [groupNameArr, setGroupNameArr] = useState(['', ''])
  const [ingredientArr, setIngredientArr] = useState([
    [{ name: '', quentity: '' }],
    [{ name: '', quentity: '' }],
  ])
  const [categoryArr, setCategoryArr] = useState({})
  const [tagArr, setTagArr] = useState([])

  const submitHanlder = () => {
    const ingredientObj = {}

    for (let i = 0; i < groupNameArr.length; i++) {
      if (!!groupNameArr[i]) ingredientObj[groupNameArr[i]] = ingredientArr[i]
    }

    console.log(recipeInfo)
    console.log(detailArr)
    console.log(categoryArr)
    console.log(tagArr)
    console.log(ingredientObj)
  }

  return (
    <CreateRecipeContainer>
      <LocationPath />
      <RecipeInfoInput
        recipeInfo={recipeInfo}
        setRecipeInfo={setRecipeInfo}
        categoryArr={categoryArr}
        setCategoryArr={setCategoryArr}
        tagArr={tagArr}
        setTagArr={setTagArr}
      />
      <RecipeDetailInput detailArr={detailArr} setDetailArr={setDetailArr} />
      <IngredientInput
        groupNameArr={groupNameArr}
        setGroupNameArr={setGroupNameArr}
        ingredientArr={ingredientArr}
        setIngredientArr={setIngredientArr}
      />
      <SubmitBtn onClick={submitHanlder}>레시피 등록</SubmitBtn>
    </CreateRecipeContainer>
  )
}

const CreateRecipeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const SubmitBtn = styled.button`
  width: 250px;
  height: 75px;
  font-size: 32px;
  font-weight: 600;
  color: white;
  border-radius: 20px;
  margin: 50px 0;
  background-color: #3f3f3f;
`

export default CreateRecipe
