import styled from 'styled-components'

const IngredientInfo = ({ ingredient }) => {
  return (
    <IngredientContainer>
      <StickyFrame>
        {Object.keys(ingredient).map((el, idx) => (
          <IngredientFrame key={el + idx}>
            <IngredientTitle>
              <p>{el}</p>
            </IngredientTitle>
            {ingredient[el].map((obj, idx) => (
              <Ingredient key={idx + obj.name + obj.quantity}>
                <IngredientName>{obj.name}</IngredientName>
                <IngredientQuan>{obj.quantity}</IngredientQuan>
              </Ingredient>
            ))}
          </IngredientFrame>
        ))}
      </StickyFrame>
    </IngredientContainer>
  )
}

const IngredientContainer = styled.article`
  position: relative;
  width: 25%;
  padding: 0 0 10px 40px;
`
const StickyFrame = styled.div`
  position: sticky;
  top: 193px;
`

const IngredientFrame = styled.ul``

const IngredientTitle = styled.li`
  display: flex;
  margin: 10px 0;
  padding-left: 10px;

  & > p {
    font-size: 32px;
    font-weight: 600;
    border-bottom: 1.5px solid #bebebe;
    padding: 5px 10px;
  }
`

const Ingredient = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
`

const IngredientName = styled.div`
  font-size: 23px;
`

const IngredientQuan = styled(IngredientName)`
  color: #5b5959;
`

export default IngredientInfo
