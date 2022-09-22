import styled from 'styled-components'

const RecipeDetailCard = ({ info, idx }) => {
  return (
    <RecipeDetailCardContainer>
      <CardPhoto src={info.photo} />
      <TextBox>
        <DescriptionTitle>{`Step ${idx + 1}`}</DescriptionTitle>
        <Description>{info.description}</Description>
      </TextBox>
    </RecipeDetailCardContainer>
  )
}

const RecipeDetailCardContainer = styled.li`
  display: flex;
  align-items: center;
  width: 765px;
  margin: 30px 0;
`

const CardPhoto = styled.img`
  width: 280px;
  height: 184px;
  border: 1px solid #aaaaaa;
`

const TextBox = styled.div`
  padding-left: 10px;
`

const DescriptionTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
`

const Description = styled.div`
  font-size: 20px;
  margin-top: 10px;
`

export default RecipeDetailCard
