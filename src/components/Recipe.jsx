import styled from 'styled-components'

import RecipeDetailCard from './RecipeDetailCard'

const Recipe = ({ recipeDetail }) => {
  return (
    <RecipeContainer>
      {recipeDetail.map((el, idx) => (
        <RecipeDetailCard info={el} idx={idx} key={el + idx} />
      ))}
    </RecipeContainer>
  )
}

const RecipeContainer = styled.ul``

export default Recipe
