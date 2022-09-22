import styled from 'styled-components'

import RecipeSimpleInfo from './RecipeSimpleInfo'
import Recipe from './Recipe'
import IngredientInfo from './IngredientInfo'

const RecipeInfo = ({
  simpleInfo,
  ingredient,
  recipeDetail,
  isBookMark,
  setIsBookMark,
}) => {
  return (
    <RecipeInfoContainer>
      <RecipeInfoFrame>
        <RecipeSimpleInfo
          simpleInfo={simpleInfo}
          isBookMark={isBookMark}
          setIsBookMark={setIsBookMark}
        />
        <Recipe recipeDetail={recipeDetail} />
      </RecipeInfoFrame>
      <IngredientInfo ingredient={ingredient} />
    </RecipeInfoContainer>
  )
}

const RecipeInfoContainer = styled.section`
  display: flex;
  width: 100%;
  border-bottom: 2px solid #888888;
`

const RecipeInfoFrame = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  border-right: 2px solid #888888;
  /* background-color: yellow; */
`

export default RecipeInfo
