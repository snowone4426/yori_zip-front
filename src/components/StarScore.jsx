import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { dummyScore } from '../dummy/termInfo'

const StarScore = () => {
  const publicUrl = process.env.PUBLIC_URL
  const CountArr = [1, 2, 3, 4, 5]
  const [score, setScore] = useState(0)

  useEffect(() => {
    setScore(dummyScore)
  }, [])

  const scoreHanlder = (num) => {
    setScore(num)
    console.log(num)
  }

  const scoreChecker = (num) => {
    return num > score ? 'unScore.png' : 'Score.png'
  }

  return (
    <StarScoreFrame>
      <ScoreTitle>레시피에 얼마나 만족하시나요?</ScoreTitle>
      <StarBox>
        {CountArr.map((el) => (
          <StarImg
            onMouseDown={() => scoreHanlder(el)}
            src={`${publicUrl}/assets/${scoreChecker(el)}`}
            key={el}
          />
        ))}
      </StarBox>
    </StarScoreFrame>
  )
}

const StarScoreFrame = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 93px;
  border-bottom: 1.5px solid #e7e6e6;
`

const ScoreTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: #6b6b6b;
  margin-right: 20px;
`

const StarBox = styled.div``

const StarImg = styled.img`
  width: 59px;
  height: 59px;
`

export default StarScore
