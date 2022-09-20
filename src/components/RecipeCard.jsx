import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const RecipeCard = (props) => {
  const navigate = useNavigate()

  const publicUrl = process.env.PUBLIC_URL
  const { recipeId, title, subTitle, thumbnail, state, created_at } = props
  const Info = ['level', 'time', 'starScore']
  let isHot = state === 'hot'
  let isNew = 604800000 >= new Date() - created_at

  const moveHanlder = (location, params = {}) => {
    if (Object.keys(params).length === 0) navigate(location)
    else navigate(location, { state: params })
  }

  return (
    <RecipeCardContatiner
      onClick={() => moveHanlder(`/recipedetail/${recipeId}`)}
    >
      <Thumbnail src={thumbnail} alt={title} />
      <MarkContainer>
        {isHot && <Marker color="#ff4e02">HOT</Marker>}
        {isNew && <Marker color="#ff8b02">NEW</Marker>}
      </MarkContainer>
      <SubTitle>{subTitle}</SubTitle>
      <Title>{title}</Title>
      <RecipeInfoContainer>
        {Info.map((el) => (
          <InfoContainer key={el}>
            <LevelIcon src={`${publicUrl}/assets/${el}.png`} />
            {props[el]}
          </InfoContainer>
        ))}
      </RecipeInfoContainer>
    </RecipeCardContatiner>
  )
}

const RecipeCardContatiner = styled.figure`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 330px;
  padding: 20px;
  cursor: pointer;
`

const MarkContainer = styled.div`
  position: absolute;
  bottom: 105px;
  right: 14px;
  display: flex;
  flex-direction: column;
`

const Marker = styled.button`
  width: 40px;
  height: 40px;
  font-size: 12px;
  font-weight: 600;
  color: white;
  border-radius: 100%;
  background-color: ${({ color }) => color};
  margin-top: 7px;
`

const Thumbnail = styled.img`
  width: 280px;
  height: 200px;
`

const SubTitle = styled.figcaption`
  font-size: 13px;
  color: #757474;
  margin-top: 10px;
`

const Title = styled.figcaption`
  font-size: 20px;
  font-weight: 600;
  margin-top: 5px;
`

const RecipeInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #757474;
  margin: 0 4px;

  & > img {
    margin-right: 2px;
  }
`

const LevelIcon = styled.img`
  position: relative;
  bottom: 1px;
  width: 21px;
  height: 21px;
`

const TimeIcon = styled.img`
  width: 21px;
  height: 21px;
`

const StarIcon = styled.img`
  position: relative;
  bottom: 1px;
  width: 21px;
  height: 21px;
`

export default RecipeCard
