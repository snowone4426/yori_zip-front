import styled from 'styled-components'
import { useState } from 'react'

import CategoryAdder from './CategoryAdder'
import RecipeDetailInfoInput from './RecipeDetailInfoInput'

const RecipeInfoInput = ({
  recipeInfo,
  setRecipeInfo,
  categoryArr,
  setCategoryArr,
  tagArr,
  setTagArr,
}) => {
  // const [recipeInfo, setRecipeInfo] = useState({
  //   title: '',
  //   subtitle: '',
  //   description: '',
  //   thumbnail: '',
  //   level: '',
  //   time: '',
  // })

  const photoClickHanlder = (e) => {
    const reader = new FileReader()
    if (Object.keys(e.target.files).length) {
      reader.readAsDataURL(e.target.files[0])
      return new Promise((resolve) => {
        reader.onload = () => {
          const photoData = reader.result
          infoAddHandler('thumbnail', photoData)
          resolve()
        }
      })
    } else setRecipeInfo({ ...recipeInfo, thumbnail: '' })
  }

  const infoAddHandler = (key, value) => {
    setRecipeInfo({ ...recipeInfo, [key]: value })
  }

  return (
    <RecipeInfoInputContainer>
      <Title>Writing recipes</Title>
      <ThumbnailContainer>
        <input
          onChange={photoClickHanlder}
          type="file"
          accept=".png,.jpg,.jpeg"
          id="profileInput"
        />
        {!!recipeInfo.thumbnail ? (
          <Thumpnail src={recipeInfo.thumbnail} />
        ) : (
          <ThumnailBtn>섬네일 등록</ThumnailBtn>
        )}
      </ThumbnailContainer>
      <RecipeSubTitle
        type="text"
        placeholder="소제목을 입력해 주세요..."
        onChange={(e) => infoAddHandler('subtitle', e.target.value)}
      />
      <RecipeTitle
        type="text"
        placeholder="제목을 입력해 주세요..."
        onChange={(e) => infoAddHandler('title', e.target.value)}
      />
      <CategoryAdder
        categoryArr={categoryArr}
        setCategoryArr={setCategoryArr}
      />
      <RecipeDetailInfoInput
        recipeInfo={recipeInfo}
        setRecipeInfo={setRecipeInfo}
        tagArr={tagArr}
        setTagArr={setTagArr}
      />
      <DescriptionBox
        placeholder="레시피에 대해 이야기해 주세요..."
        maxLength={266}
        onChange={(e) => infoAddHandler('description', e.target.value)}
      />
    </RecipeInfoInputContainer>
  )
}

const RecipeInfoInputContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 880px;
`

const Title = styled.header`
  font-size: 64px;
  font-family: 'IM Fell French Canon SC', serif;
  margin-top: 40px;
  pointer-events: none;
`

const ThumbnailContainer = styled.label`
  position: relative;
  width: 848px;
  height: 437px;
  border: 1px solid #959595;
  margin-top: 40px;
  cursor: pointer;

  & > input[type='file'] {
    display: none;
  }
`

const Thumpnail = styled.img`
  width: 100%;
  height: 100%;
  pointer-events: none;
`

const ThumnailBtn = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 155px;
  height: 40px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  border-radius: 10px;
  background-color: #a8a8a8;
  pointer-events: none;
`

const RecipeSubTitle = styled.input`
  align-self: flex-start;
  font-size: 22px;
  padding-left: 13px;
  margin-top: 10px;

  &::placeholder {
    color: 878787;
  }
`

const RecipeTitle = styled.input`
  align-self: flex-start;
  font-size: 32px;
  font-weight: 600;
  padding-left: 13px;
  margin-top: 10px;

  &::placeholder {
    color: 878787;
  }
`

const DescriptionBox = styled.textarea`
  width: 820px;
  height: 180px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 37px;
  padding: 10px;
  background-color: #ededed;

  &::placeholder {
    color: #575757;
  }
`

export default RecipeInfoInput
