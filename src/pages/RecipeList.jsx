import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import TitleBox from '../components/TitleBox'
import RecipeCardList from '../components/RecipeCardList'
import CategoryList from '../components/CategoryList'
import LocationPath from '../components/LocationPath'

import { dummyRecipeArr } from '../dummy/termInfo'

const RecipeList = () => {
  const publicUrl = process.env.PUBLIC_URL
  const location = useLocation()
  const sortArr = ['최신순', '인기순', '별점순']

  const [isSortOpen, setIsSortOpen] = useState(false)
  const [howSort, setHowSort] = useState('최신순')
  const [recipeArr, setRecipeArr] = useState([
    {
      recipeId: 0,
      title: '',
      subTitle: '',
      thumbnail: '',
      level: '',
      time: '',
      starScore: '',
      state: '',
      created_at: new Date(),
    },
  ])

  useEffect(() => {
    setRecipeArr(dummyRecipeArr)
  }, [])

  const sortHanlder = (sort) => {
    setHowSort(sort)
  }

  let heading = (
    <>
      <TitleBox
        title="Our Recipes"
        subTitle="여러분들이 제안한 다양한 레시피를 둘러보세요!"
        isLink={false}
      />
      <CategoryListFrame>
        <CategoryList where="recipelist" />
      </CategoryListFrame>
    </>
  )

  if (location.pathname.split('/').includes('search')) {
    heading = (
      <>
        <TitleBox
          title="Search Recipes"
          subTitle={`${recipeArr.length}개의 레시피가 검색되었습니다`}
          isLink={false}
        />
        <CategoryListFrame></CategoryListFrame>
      </>
    )
  }

  return (
    <RecipeListContainer>
      <LocationPath />
      <RecipeFrame>
        {heading}
        <SortBtnContainer onClick={() => setIsSortOpen(!isSortOpen)}>
          <ArrowIcon
            isSortOpen={isSortOpen}
            src={`${publicUrl}/assets/downArrow.png`}
            alt="arrow"
          />
          <SortSelect>{howSort}</SortSelect>
          <OptionBox isSortOpen={isSortOpen}>
            {sortArr.map((el) => (
              <Option onClick={() => sortHanlder(el)} key={el}>
                {el}
              </Option>
            ))}
          </OptionBox>
        </SortBtnContainer>
        <RecipeCardList recipeArr={recipeArr} />
      </RecipeFrame>
    </RecipeListContainer>
  )
}

const RecipeListContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 80vh;
`

const RecipeFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`
const CategoryListFrame = styled.div`
  border: 2px solid #e9e9e9;
  margin: 50px 0 20px 0;
  padding: 8px 15px 7px 0;
`

const SortBtnContainer = styled.div`
  position: relative;
  display: flex;
  align-self: flex-end;
  width: 97px;
  height: 40px;
  border: 1px solid #8b8b8b;
  margin: 10px 25px -30px 0;
  padding: 5px 8px;
  cursor: pointer;
`

const ArrowIcon = styled.img`
  width: 25px;
  height: 25px;
  transform: ${({ isSortOpen }) => (isSortOpen ? 'rotate(180deg)' : '')};
`

const SortSelect = styled.button`
  font-size: 18px;
`

const OptionBox = styled.div`
  position: absolute;
  top: 38px;
  left: -1px;
  display: ${({ isSortOpen }) => (isSortOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 97px;
  border: 1px solid #8b8b8b;
  background-color: white;
  z-index: 999;
`

const Option = styled.div`
  font-size: 18px;
  padding: 8px 5px;
`

export default RecipeList
