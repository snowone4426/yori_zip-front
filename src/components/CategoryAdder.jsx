import styled from 'styled-components'
import { useState } from 'react'

import CategoryCustomSelect from './CategoryCustomSelect'

const CategoryAdder = ({ categoryArr, setCategoryArr }) => {
  const publicUrl = process.env.PUBLIC_URL
  // const [categoryArr, setCategoryArr] = useState({})
  const [isFill, setIsFill] = useState([''])

  const addCategoryBox = () => {
    isFill.length < 4 && setIsFill([...isFill, ''])
  }

  return (
    <CategoryAdderContainer>
      {isFill.map((el, idx, elArr) => (
        <CategoryCustomSelect
          categoryArr={categoryArr}
          setCategoryArr={setCategoryArr}
          setIsFill={setIsFill}
          isFillArr={elArr}
          isFill={el}
          idx={idx}
          key={idx}
        />
      ))}
      <BoxAddBtn
        onClick={addCategoryBox}
        src={`${publicUrl}/assets/grayplus.png`}
        isVisivle={isFill.length < 4}
      />
    </CategoryAdderContainer>
  )
}

const CategoryAdderContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-top: 20px;
  padding-left: 5px;
`

const BoxAddBtn = styled.img`
  display: ${({ isVisivle }) => (isVisivle ? 'default' : 'none')};
  width: 26px;
  height: 26px;
  cursor: pointer;
`

export default CategoryAdder
