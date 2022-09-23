import styled from 'styled-components'
import { useState } from 'react'

import { categoryList } from '../dummy/termInfo'

const CategoryCustomSelect = ({
  categoryArr,
  setCategoryArr,
  isFill,
  setIsFill,
  isFillArr,
  idx,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const categoryBoxAddHanlder = (large, small) => {
    setCategoryArr((preState) => {
      return { ...preState, [large]: small }
    })
    setIsFill((preState) => {
      preState[idx] = small
      return preState
    })
    openHanlder()
  }

  const deleteHanlder = () => {
    if (isFillArr.length === 1) {
      setIsFill([''])
    }
    setCategoryArr((preState) => {
      delete preState[
        Object.keys(preState)[Object.values(preState).indexOf(isFill)]
      ]
      return preState
    })
    setIsFill((preState) => preState.filter((el) => el !== isFill))
  }

  const openHanlder = () => {
    setIsOpen(!isOpen)
  }

  if (!!isFill) {
    return (
      <CategoryCustomSelectContainer>
        <CategoryBox isFill={true} onClick={deleteHanlder}>
          {isFill}
        </CategoryBox>
      </CategoryCustomSelectContainer>
    )
  }

  return (
    <CategoryCustomSelectContainer>
      <CategoryBox isOpen={isOpen} isFill={false} onClick={openHanlder}>
        카테고리 검색..
      </CategoryBox>
      <SelectBox isOpen={isOpen}>
        {Object.keys(categoryList).map(
          (el) =>
            !Object.keys(categoryArr).includes(el) && (
              <LargeCategoryBox key={el}>
                <LargeCategory>{el}</LargeCategory>
                {categoryList[el].map((it) => (
                  <SmallCategory
                    onClick={() => categoryBoxAddHanlder(el, it)}
                    key={el + it}
                  >
                    {it}
                  </SmallCategory>
                ))}
              </LargeCategoryBox>
            ),
        )}
      </SelectBox>
    </CategoryCustomSelectContainer>
  )
}

const fillBox = `
  font-size: 20px;
  font-weight: 600;
  color: #434242;
`

const noFillBox = `
  font-size: 16px;
  color: #878787;
`

const CategoryCustomSelectContainer = styled.div`
  position: relative;
  width: 150px;
  height: 43px;
  margin-right: 10px;
`

const CategoryBox = styled.button`
  width: 150px;
  height: 43px;
  ${({ isFill }) => (isFill ? fillBox : noFillBox)}
  border: 1px solid #959595;
  border-radius: ${({ isOpen }) => (isOpen ? '15px 15px 0 0' : '15px')};
  background-color: #f1f1f1;
`

const SelectBox = styled.div`
  position: absolute;
  top: 1;
  left: 0;
  display: ${({ isOpen }) => (isOpen ? 'default' : 'none')};
  width: 150px;
  font-size: 20px;
  font-weight: 600;
  color: #434242;
  border: 1px solid #959595;
  border-radius: 0 0 15px 15px;
  background-color: #f1f1f1;
  overflow: hidden;
  z-index: 999;
`

const LargeCategoryBox = styled.div``

const LargeCategory = styled.div`
  font-size: 20px;
  margin: 7px 0;
  padding-left: 17px;
`

const SmallCategory = styled.div`
  font-size: 16px;
  opacity: 0.9;
  padding: 5px 0;
  padding-left: 17px;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
  }
`

export default CategoryCustomSelect
