import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { dummyMyRecipe } from '../dummy/termInfo'

const MyRecipe = () => {
  const navigate = useNavigate()
  const [myRecipeList, setMyRecipeList] = useState([])

  useEffect(() => {
    setMyRecipeList(dummyMyRecipe)
  }, [])

  let recipeList = <EmptyList>아직 작성한 글이 없습니다.</EmptyList>

  if (!!myRecipeList.length) {
    recipeList = myRecipeList.map((el, idx) => (
      <ListCard
        onClick={() => navigate(`/recipedetail/${el.recipeId}`)}
        key={idx}
      >
        <div>{idx + 1}</div>
        <div>
          <Thumbnail src={el.thumpnail} />
        </div>
        <div>
          <span>{el.subtitle}</span>
          {el.title}
        </div>
        <div>{`${el.created_at.getFullYear()}-${
          el.created_at.getMonth() + 1
        }-${el.created_at.getDate()}`}</div>
        <div>{el.starScore}</div>
        <div>{el.repleCount}</div>
      </ListCard>
    ))
  }
  return (
    <MyRecipeContainer>
      <MyRecipeList>
        <ListHeader>
          <div>번호</div>
          <div>섬네일</div>
          <div>소제목 / 제목</div>
          <div>작성일자</div>
          <div>별점</div>
          <div>댓글수</div>
        </ListHeader>
        {recipeList}
      </MyRecipeList>
    </MyRecipeContainer>
  )
}

const MyRecipeContainer = styled.section`
  margin: 20px 0;
  padding: 0 40px;
  border-left: 1px solid #d8d8d8;
`

const MyRecipeList = styled.ul``

const ListHeader = styled.li`
  display: grid;
  grid-template-columns: 80px 150px 400px 160px 100px 100px;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    color: #757575;
    border-bottom: 1px solid #d8d8d8;
    height: 50px;
  }
`

const ListCard = styled.li`
  display: grid;
  grid-template-columns: 80px 150px 400px 160px 100px 100px;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    margin-top: 4px;
    cursor: pointer;

    & > span {
      font-size: 17px;
      opacity: 0.8;
    }
  }
`

const Thumbnail = styled.img`
  width: 80px;
  height: 50px;
`

const EmptyList = styled.li`
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-weight: 600;
  color: gray;
  margin-top: 100px;
`

export default MyRecipe
