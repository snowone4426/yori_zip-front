import { useEffect, useState } from 'react'
import styled from 'styled-components'

const QuestionSelect = ({ onChangeEvent = (key, value) => {} }) => {
  const [questionArr, setQuestionArr] = useState([])

  useEffect(() => {
    const getArr = [
      '기억에 남는 추억의 장소는?',
      '자신의 인생 좌우명은?',
      '자신의 보물 제1호는?',
      '유년시절 가장 기억에 남는 친구 이름은?',
      '다시 태어나면 되고싶은 것은?',
      '인상 깊게 읽은 책의 이름은?',
    ]
    setQuestionArr(getArr)
    onChangeEvent('question', getArr[0])
  }, [])

  return (
    <QuestionSelectContainer>
      <SelectBox onChange={(e) => onChangeEvent('question', e.target.value)}>
        {questionArr.map((el) => (
          <OptionBox value={el} key={el}>
            {el}
          </OptionBox>
        ))}
      </SelectBox>
      <AnswerBox>
        <AnswerInput
          onChange={(e) => onChangeEvent('answer', e.target.value)}
          type="text"
          placeholder="질문의 답을 적어주세요"
        />
      </AnswerBox>
    </QuestionSelectContainer>
  )
}

const QuestionSelectContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SelectBox = styled.select`
  display: flex;
  width: 400px;
  height: 70px;
  font-size: 18px;
  color: 838383;
  margin-top: 7px;
  padding: 20px;
  background-color: #ececec;
`

const OptionBox = styled.option`
  font-size: 18px;
  background: #ececec;
`

const AnswerBox = styled.label`
  display: flex;
  width: 400px;
  height: 70px;
  font-size: 18px;
  color: 838383;
  margin-top: 10px;
  padding: 20px;
  background-color: #ececec;
`

const AnswerInput = styled.input`
  width: 400px;
  font-size: 20px;
  color: 838383;
`

export default QuestionSelect
