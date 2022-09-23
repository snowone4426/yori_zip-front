import styled from 'styled-components'
import { useState } from 'react'

const RecipeDetailInfoInput = ({
  recipeInfo,
  setRecipeInfo,
  tagArr,
  setTagArr,
}) => {
  const publicUrl = process.env.PUBLIC_URL
  // const [tagArr, setTagArr] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [level, setLevel] = useState('')
  const levelArr = ['초급', '중급', '상급']

  const tagAddHanlder = (e) => {
    if (e.key === 'Enter' && !!e.target.value && tagArr.length < 5) {
      setTagArr([...tagArr, e.target.value])
      e.target.value = ''
    }
  }

  const tagDeleteHanlder = (str) => {
    setTagArr(tagArr.filter((el) => el !== str))
  }

  const levelHanlder = (e) => {
    setLevel(e.target.name)
    infoAddHandler('level', e.target.name)
    setIsOpen(!isOpen)
  }

  const infoAddHandler = (key, value) => {
    setRecipeInfo({ ...recipeInfo, [key]: value })
  }

  return (
    <RecipeDetailInfoInputContainer>
      <TagBox>
        <TagInputFrame>
          #
          <TagInput
            type="text"
            placeholder={
              tagArr.length < 5
                ? '태그를 입력해 주세요...'
                : '등록 제한에 도달했습니다'
            }
            maxLength={10}
            onKeyUp={tagAddHanlder}
            disabled={!(tagArr.length < 5)}
          />
        </TagInputFrame>
        <TagListBox>
          {tagArr.map((el, idx) => (
            <TagList onClick={() => tagDeleteHanlder(el)} key={el + idx}>
              {el}
            </TagList>
          ))}
        </TagListBox>
      </TagBox>
      <SubDataBox>
        <SubDataSelectFrame>
          <SubDataSelect onClick={() => setIsOpen(!isOpen)}>
            <ArrowIcon
              isOpen={isOpen}
              src={`${publicUrl}/assets/downArrow.png`}
            />
            {!!level ? level : '난이도'}
          </SubDataSelect>
          <OptionBox isOpen={isOpen}>
            {levelArr.map((el) => (
              <Option name={el} onClick={levelHanlder} key={el}>
                {el}
              </Option>
            ))}
          </OptionBox>
        </SubDataSelectFrame>

        <SubDataLabel>
          <SubDataInput
            value={recipeInfo.time}
            onChange={(e) => infoAddHandler('time', e.target.value)}
            type="text"
            placeholder="소요시간"
          />
        </SubDataLabel>
      </SubDataBox>
    </RecipeDetailInfoInputContainer>
  )
}

const RecipeDetailInfoInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 97px;
  border-bottom: 1px solid #bdbdbd;
  margin-top: 20px;
  padding-bottom: 30px;
`

const TagBox = styled.div`
  padding-left: 5px;
`

const TagInputFrame = styled.label`
  display: flex;
  align-items: center;
  width: 300px;
  height: 40px;
  font-size: 20px;
  font-weight: 600;
  border: 1px solid #959595;
  border-radius: 5px;
  padding: 5px;
  background-color: #f1f1f1;
`

const TagInput = styled.input`
  font-size: 20px;
  margin-left: 10px;
`

const TagListBox = styled.ul`
  display: flex;
  margin-top: 5px;
`

const TagList = styled.li`
  font-size: 15px;
  font-weight: 600;
  color: #755143;
  border-radius: 8px;
  margin-right: 8px;
  padding: 3px;
  background-color: #d9d9d9;
  cursor: pointer;
`

const SubDataBox = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 15px;
`

const SubDataSelectFrame = styled.div`
  position: relative;
  margin-left: 10px;
`

const SubDataSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 105px;
  height: 45px;
  font-size: 20px;
  color: #878787;
  white-space: nowrap;
  border: 1px solid #959595;
  padding: 0 15px 0 10px;
  background-color: #f1f1f1;
  cursor: pointer;
`

const OptionBox = styled.div`
  position: absolute;
  top: 44px;
  left: 0px;
  display: ${({ isOpen }) => (isOpen ? 'default' : 'none')};
  width: 105px;
  border: 1px solid #959595;
  background-color: white;
  cursor: pointer;
`

const Option = styled.button`
  width: 105px;
  height: 35px;
  font-size: 20px;
  color: #878787;
  text-align: right;
  padding-right: 15px;

  &:hover {
    color: white;
    background-color: #a8a8a8;
  }
`

const SubDataLabel = styled.label`
  display: flex;
  align-items: center;
  width: 105px;
  height: 45px;
  border: 1px solid #959595;
  margin-left: 10px;
  padding: 10px;
  background-color: #f1f1f1;
`

const SubDataInput = styled.input`
  width: 100%;
  font-size: 20px;
  text-align: right;
`

const ArrowIcon = styled.img`
  width: 20px;
  height: 20px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : '')};
`

export default RecipeDetailInfoInput
