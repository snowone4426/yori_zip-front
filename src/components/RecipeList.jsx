import styled from 'styled-components'

import RecipeCard from './RecipeCard'

const RecipeList = ({ recipeArr = [] }) => {
  let cardList = <div>레시피가 없습니다</div>
  if (!!recipeArr[0]) {
    cardList = recipeArr.map((el) => (
      <RecipeCard {...el} key={el.recipeId + el.title} />
    ))
  }

  return <RecipeListContainer>{cardList}</RecipeListContainer>
}

const RecipeListContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  flex-wrap: wrap;
  width: 1322px;
  margin-top: 50px;
`

export default RecipeList
