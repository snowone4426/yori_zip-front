import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { dummyMyReple } from '../dummy/termInfo'

const MyReple = () => {
  const navigate = useNavigate()
  const [myRepleList, setMyRepleList] = useState([])

  useEffect(() => {
    setMyRepleList(dummyMyReple)
  }, [])

  let repleList = <EmptyList>아직 작성한 글이 없습니다.</EmptyList>

  if (!!myRepleList.length) {
    repleList = myRepleList.map((el, idx) => (
      <ListCard onClick={() => navigate(`/recipedetail/${el.recipeId}`)}>
        <div>{idx + 1}</div>
        <span>{el.context}</span>
        <div>{`${el.created_at.getFullYear()}-${
          el.created_at.getMonth() + 1
        }-${el.created_at.getDate()}`}</div>
      </ListCard>
    ))
  }

  return (
    <MyRepleContainer>
      <MyRepleList>
        <MyRepleHeader>
          <div>번호</div>
          <div>내용</div>
          <div>작성일자</div>
        </MyRepleHeader>
        {repleList}
      </MyRepleList>
    </MyRepleContainer>
  )
}

const MyRepleContainer = styled.section`
  margin: 20px 0;
  padding: 0 40px;
  border-left: 1px solid #d8d8d8;
`

const MyRepleList = styled.ul``

const MyRepleHeader = styled.li`
  display: grid;
  grid-template-columns: 100px 700px 150px;

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
  display: flex;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 100px 700px 150px;
  margin-top: 10px;
  cursor: pointer;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
  }

  & > span {
    width: 700px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const EmptyList = styled.li`
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-weight: 600;
  color: gray;
  margin-top: 100px;
`

export default MyReple
