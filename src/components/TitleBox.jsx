import styled from 'styled-components'
import React from 'react'

const TitleBox = ({
  title,
  subTitle,
  onClickEvent = () => {},
  isLink = true,
}) => {
  return (
    <TitleContainer>
      <TitleBoxFrame onClick={() => onClickEvent()} isLink={isLink}>
        <TitleText>{title}</TitleText>
        <MiddleLine />
        <SubtitleText>{subTitle}</SubtitleText>
      </TitleBoxFrame>
    </TitleContainer>
  )
}

const TitleContainer = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
`

const TitleBoxFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: ${({ isLink }) => (isLink ? 'pointer' : 'default')};
`

const TitleText = styled.div`
  font-size: 48px;
  font-family: 'IM Fell French Canon SC', serif;
  pointer-events: none;
`

const MiddleLine = styled.div`
  width: 60px;
  border-top: 2px solid black;
  margin-top: 7px;
  pointer-events: none;
`

const SubtitleText = styled.div`
  font-size: 20px;
  color: #837979;
  letter-spacing: 2px;
  margin-top: 13px;
  pointer-events: none;
`

export default React.memo(TitleBox)
