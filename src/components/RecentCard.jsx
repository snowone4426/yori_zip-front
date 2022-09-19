import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const RecentCard = (props) => {
  const publicUrl = process.env.PUBLIC_URL
  const navigate = useNavigate()

  const moveHanlder = (location, params = {}) => {
    if (Object.keys(params).length === 0) navigate(location)
    else navigate(location, { state: params })
    props.setIsSubNavOpen('')
  }

  return (
    <RecentCardContainer
      onClick={() => moveHanlder(`recipedetail/${props.id}`)}
    >
      <RecentImg
        src={`${publicUrl}/assets/고기구이.jpg`}
        alt="recent view photo"
      />
      <CardName>{props.name}</CardName>
    </RecentCardContainer>
  )
}

const RecentCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 170px;
  border: 1px solid #b5b5b5;
  border-radius: 5px;
  margin-right: 10px;
  padding: 10px;
`

const RecentImg = styled.img`
  width: 180px;
  height: 120px;
`

const CardName = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
`

export default RecentCard
