import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { dummyMyinfo } from '../dummy/termInfo'

const RepleInput = () => {
  const navigate = useNavigate()
  const [textValue, setTextValue] = useState('')
  const [isHover, setIsHover] = useState(false)

  const hoverHanlder = (hover) => {
    setIsHover(hover)
  }

  const textareaHanlder = (e) => {
    setTextValue(e.target.value)
  }

  const submitHanlder = () => {
    console.log(textValue)
    setTextValue('')
  }

  const loginChecker = () => {
    if (!dummyMyinfo.userId) {
      navigate('/signin', { state: { where: 'comment' } })
    }
  }

  return (
    <RepleInputContainer onClick={loginChecker}>
      <InputHeader>댓글 작성</InputHeader>
      <RepleTextarea
        onChange={textareaHanlder}
        value={textValue}
        placeholder="댓글을 입력해 주세요..."
        maxLength={180}
        onMouseEnter={() => hoverHanlder(true)}
        onMouseLeave={() => hoverHanlder(false)}
      />
      <LengthView>{textValue.length}</LengthView>
      <SubmitBtn
        isHover={!!textValue && isHover}
        onMouseEnter={() => hoverHanlder(true)}
        onMouseLeave={() => hoverHanlder(false)}
        onClick={submitHanlder}
      >
        작성
      </SubmitBtn>
    </RepleInputContainer>
  )
}

const RepleInputContainer = styled.li`
  position: relative;
  width: 790px;
  height: 140px;
  border: 1px solid #b8b4b4;
  border-radius: 20px;
  margin-top: 24px;
  overflow: hidden;
`

const InputHeader = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #888282;
  border-bottom: 1px solid #b8b4b4;
  padding: 10px 0 8px 20px;
`

const RepleTextarea = styled.textarea`
  width: 790px;
  height: 100px;
  font-size: 16px;
  padding: 10px;
`

const LengthView = styled.div`
  position: absolute;
  bottom: 8px;
  right: 12px;
  font-size: 15px;
  font-weight: 600;
  opacity: 0.6;
  pointer-events: none;
`

const SubmitBtn = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  display: ${({ isHover }) => (isHover ? 'default' : 'none')};
  width: 90px;
  height: 30px;
  font-size: 15px;
  font-weight: 600;
  color: #888282;
  border: 1px solid #b8b4b4;
  border-radius: 20px;

  background-color: white;
`

export default RepleInput
