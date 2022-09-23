import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

import { categoryArr } from '../dummy/termInfo'

const CategoryList = ({ where = '', setIsSubNavOpen = () => {} }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [smallCategory, setSmallCategory] = useState(
    !!location.state && Object.keys(location.state).includes('smallCategory')
      ? { ...location.state.smallCategory }
      : {},
  )

  const cateBtnClickHanlder = (large, small = '') => {
    if (where === 'nav') {
      setIsSubNavOpen('')
      navigate('/recipelist', {
        state: {
          largeCategory: large,
          smallCategory: {
            종류: '',
            재료: '',
            방법: '',
            도구: '',
            [large]: small,
          },
        },
      })
    } else if (smallCategory[large] === small) {
      setSmallCategory({
        ...smallCategory,
        [large]: '',
      })
    } else {
      setSmallCategory({
        ...smallCategory,
        [large]: small,
      })
    }
  }
  return (
    <CategoryListContainer>
      <LargeCategoryContainer>
        {categoryArr.map((el, idx) => (
          <LargeCategoryBtn
            onClick={() => cateBtnClickHanlder(el[0])}
            key={el[0] + idx}
          >
            {el[0]}
          </LargeCategoryBtn>
        ))}
      </LargeCategoryContainer>
      <SmallCategoryContainer>
        {categoryArr.map((elArr) => (
          <SmallCategoryFrame key={elArr[0]}>
            {elArr.map(
              (el, idx, elArr) =>
                idx !== 0 && (
                  <SmallCategoryBtn
                    onClick={() => cateBtnClickHanlder(elArr[0], el)}
                    key={el}
                    same={smallCategory[elArr[0]] === el}
                  >
                    {el}
                  </SmallCategoryBtn>
                ),
            )}
          </SmallCategoryFrame>
        ))}
      </SmallCategoryContainer>
    </CategoryListContainer>
  )
}

const CategoryListContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

const LargeCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 147px;
  border-right: 2px solid #b8b8b8;
  margin: 13px 0 5px;
`

const LargeCategoryBtn = styled.button`
  font-size: 28px;
  margin-bottom: 8px;
`

const SmallCategoryContainer = styled.div`
  padding: 13px 0 0 22px;
`

const SmallCategoryFrame = styled.div``

const SmallCategoryBtn = styled.button`
  font-size: 24px;
  color: ${({ same }) => (same ? 'white' : 'black')};
  font-weight: ${({ same }) => (same ? '600' : '400')};
  border-radius: 10px;
  margin: 0 12px 3px 0;
  padding: 5px;
  background-color: ${({ same }) => (same ? '#C5C5C5' : 'none')};
`

export default CategoryList
