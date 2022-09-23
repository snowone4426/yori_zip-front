import { useState } from 'react'
import styled from 'styled-components'

const DetailInfo = ({ idx, detailArr, setDetailArr }) => {
  const [description, setDescription] = useState('')

  const photoClickHanlder = (e) => {
    const reader = new FileReader()
    if (Object.keys(e.target.files).length) {
      reader.readAsDataURL(e.target.files[0])
      return new Promise((resolve) => {
        reader.onload = () => {
          const modifyDetailArr = [...detailArr]
          modifyDetailArr[idx] = {
            ...modifyDetailArr[idx],
            photo: reader.result,
          }
          setDetailArr(modifyDetailArr)
          resolve()
        }
      })
    } else setDetailArr({ ...detailArr, photo: '' })
  }

  const descriptionHanlder = (e) => {
    setDescription(e.target.value)
    const modifyDetailArr = [...detailArr]
    modifyDetailArr[idx] = {
      ...modifyDetailArr[idx],
      description: e.target.value,
    }
    setDetailArr(modifyDetailArr)
  }

  return (
    <DetailInfoContainer>
      <PhotoArea>
        <input
          onChange={photoClickHanlder}
          type="file"
          accept=".png,.jpg,.jpeg"
          id="profileInput"
        />
        {!!detailArr[idx].photo ? (
          <Photo src={detailArr[idx].photo} />
        ) : (
          <PhotoBtn>사진 등록</PhotoBtn>
        )}
      </PhotoArea>
      <DescriptionArea>
        <StepTitle>{`STEP ${idx + 1}`}</StepTitle>
        <Description
          value={description}
          onChange={descriptionHanlder}
          type="text"
          placeholder="여기선 어떤 작업을 수행해야 할까요?"
        />
      </DescriptionArea>
    </DetailInfoContainer>
  )
}

const DetailInfoContainer = styled.li`
  display: flex;
  margin-top: 40px;
`

const PhotoArea = styled.label`
  position: relative;
  width: 320px;
  height: 215px;
  border: 1px solid #959595;
  cursor: pointer;

  & > input[type='file'] {
    display: none;
  }
`

const Photo = styled.img`
  width: 100%;
  height: 100%;
  pointer-events: none;
`

const PhotoBtn = styled.button`
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
const DescriptionArea = styled.div`
  padding: 10px 0 0 20px;
`

const StepTitle = styled.div`
  font-size: 25px;
  font-family: 'Inknut Antiqua', serif;
`

const Description = styled.textarea`
  width: 308px;
  height: 150px;
  font-size: 16px;
  margin-top: 10px;
`

export default DetailInfo
