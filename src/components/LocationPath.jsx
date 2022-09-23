import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import React from 'react'

const LocationPath = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const publicUrl = process.env.PUBLIC_URL
  const path = location.pathname.split('/')

  const nameChangeHandler = (str) => {
    switch (str) {
      case '':
        return '홈'
      case 'recipelist':
        return '레시피'
      case 'recipedetail':
        return '레시피상세'
      case 'search':
        return '검색'
      case 'createrecipe':
        return '레시피 등록'
      default:
        return str
    }
  }

  const pathMaker = (arr, idx) => {
    if (idx === 0) return '/'
    return arr.slice(0, idx + 1).join('/')
  }
  return (
    <LocationPathContainer>
      {path.map((el, idx, elArr) => (
        <React.Fragment key={idx + el}>
          <Path
            onClick={() =>
              navigate(pathMaker(elArr, idx), { state: location.state })
            }
          >
            {nameChangeHandler(el)}
          </Path>
          <img src={`${publicUrl}/assets/rightArrow.png`} alt="arrow" />
        </React.Fragment>
      ))}
    </LocationPathContainer>
  )
}

const LocationPathContainer = styled.ul`
  display: flex;
  align-self: flex-start;
  margin: 13px 0 0 10px;
  opacity: 0.8;

  & img {
    width: 20px;

    &:last-child {
      display: none;
    }
  }
`

const Path = styled.li`
  font-size: 20px;
  cursor: pointer;
`

export default LocationPath
