import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

const CategoryList = ({ where, setIsSubNavOpen = () => {} }) => {
  const categoryArr = [
    [
      '종류',
      '밥',
      '반찬',
      '국물',
      '면',
      '디저트',
      '분식',
      '셀러드',
      '음료',
      '주류',
      '기타',
    ],
    [
      '재료',
      '쇠고기',
      '돼지고기',
      '닭고기',
      '채소',
      '해물',
      '계란',
      '유제품',
      '기타',
    ],
    ['방법', '구이', '찜', '국물', '볶음', '조림', '튀김', '비빔', '기타'],
    [
      '도구',
      '에어프라이어',
      '가스레인지',
      '전자레인지',
      '냄비',
      '오븐',
      '기타',
    ],
  ]
  const navigate = useNavigate()
  const location = useLocation()
  const [smallCategory, setSmallCategory] = useState(
    !!location.state && Object.keys(location.state).includes('smallCategory')
      ? { ...location.state.smallCategory }
      : {},
  )

  const moveHanlder = (location, params = {}) => {
    if (Object.keys(params).length === 0) navigate(location)
    else navigate(location, { state: params })
  }

  const cateBtnClickHanlder = (large, small = '') => {
    if (where === 'nav') {
      setIsSubNavOpen('')
      moveHanlder('/recipelist', {
        largeCategory: large,
        smallCategory: {
          종류: '',
          재료: '',
          방법: '',
          도구: '',
          [large]: small,
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
