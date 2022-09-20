import styled from 'styled-components'
import React from 'react'

const TitleBox = ({ title, subTitle }) => {
  return (
    <TitleContainer>
      <TitleText>{title}</TitleText>
      <MiddleLine />
      <SubtitleText>{subTitle}</SubtitleText>
    </TitleContainer>
  )
}

const TitleContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TitleText = styled.div`
  font-size: 48px;
  font-family: 'IM Fell French Canon SC', serif;
`

const MiddleLine = styled.div`
  width: 60px;
  border-top: 2px solid black;
  margin-top: 7px;
`

const SubtitleText = styled.div`
  font-size: 20px;
  color: #837979;
  letter-spacing: 2px;
  margin-top: 13px;
`

export default React.memo(TitleBox)
