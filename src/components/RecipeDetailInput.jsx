// import { useState } from 'react'
import styled from 'styled-components'

import DetailInfo from './DetailInfo'

const RecipeDetailInput = ({ detailArr, setDetailArr }) => {
  const publicUrl = process.env.PUBLIC_URL
  // const [detailArr, setDetailArr] = useState([
  //   { detailid: 1, photo: '', description: '' },
  // ])

  const detailAddHandler = () => {
    setDetailArr([
      ...detailArr,
      { detailid: detailArr.length + 1, photo: '', description: '' },
    ])
  }

  return (
    <RecipeDetailInputContainer>
      <RecipeDetailInputFrame>
        <DetailInfoList>
          {detailArr.map((el, idx) => (
            <DetailInfo
              detailArr={detailArr}
              setDetailArr={setDetailArr}
              idx={idx}
              key={el.detailid}
            />
          ))}
        </DetailInfoList>
        <DetailAddBtn
          onClick={detailAddHandler}
          src={`${publicUrl}/assets/grayplus.png`}
        />
      </RecipeDetailInputFrame>
    </RecipeDetailInputContainer>
  )
}

const RecipeDetailInputContainer = styled.section`
  padding-bottom: 30px;
  border-bottom: 2px solid #bdbdbd;
`

const RecipeDetailInputFrame = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 756px;
`

const DetailInfoList = styled.ul``

const DetailAddBtn = styled.img`
  width: 53px;
  height: 53px;
  margin-top: 25px;
  cursor: pointer;
`

export default RecipeDetailInput
