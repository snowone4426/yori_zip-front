import { useState } from 'react'
import styled from 'styled-components'

import { termHTML } from '../dummy/termInfo'

const SignUpTerms = () => {
  const [isChecked, setIsChecked] = useState(false)

  const checkHandler = () => {
    setIsChecked(!isChecked)
  }

  return (
    <SignUpTermsContainer>
      <Term>{termHTML}</Term>
      <CheckBoxLabel>
        <input type="checkbox" value={isChecked} onChange={checkHandler} /> 위
        약관에 동의합니다
      </CheckBoxLabel>
    </SignUpTermsContainer>
  )
}

const SignUpTermsContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 940px;
`

const Term = styled.div`
  width: 920px;
  height: 220px;
  border: 1px solid #dedede;
  padding: 0 15px 15px;
  overflow: scroll;

  & h1,
  & h2 {
    margin-top: 18px;
    font-size: 20px;
    font-weight: 600;
    color: #2a303a;
  }
  & h3 {
    margin: 7px 0 0 12px;
    font-size: 11px;
    color: #2a303a;
  }
  & p,
  .term ol {
    margin-top: 10px;
  }
  & li {
    margin: 5px 0 0 13px;
    text-indent: -13px;
  }
  & li p {
    margin-top: 5px;
    text-indent: 0;
  }
  & .st {
    font-weight: bold;
  }
  & span {
    color: #ff1414;
  }
  & .dcs {
    margin: 5px 0 0 11px;
  }
  & .nobld h3 {
    font-weight: normal;
  }
  & div {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #999;
    text-indent: 0;
  }
`

const CheckBoxLabel = styled.label`
  font-size: 16px;

  & input[type='checkbox'] {
    display: none;
  }
`

export default SignUpTerms
