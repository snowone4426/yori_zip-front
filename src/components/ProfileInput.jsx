import { useState } from 'react'
import styled from 'styled-components'

const ProfileInput = ({ onChangeEvent = (key, value) => {}, value = '' }) => {
  const publicUrl = process.env.PUBLIC_URL
  const [imageSrc, setImageSrc] = useState(value)

  const clickHanlder = (e) => {
    const reader = new FileReader()
    if (Object.keys(e.target.files).length) {
      reader.readAsDataURL(e.target.files[0])
      return new Promise((resolve) => {
        reader.onload = () => {
          const photoData = reader.result
          setImageSrc(photoData)
          onChangeEvent('profile', photoData)
          resolve()
        }
      })
    } else setImageSrc('')
  }

  return (
    <ProfileFrame>
      <Profile src={imageSrc} />
      {!imageSrc && <ProfileIcon src={`${publicUrl}/assets/addProfile.png`} />}
      <input
        onChange={clickHanlder}
        type="file"
        accept=".png,.jpg,.jpeg"
        id="profileInput"
      />
    </ProfileFrame>
  )
}

const ProfileFrame = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 100%;
  margin: 40px 0 10px 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;

  & > input[type='file'] {
    visibility: hidden;
  }
`

const Profile = styled.img`
  width: 250px;
  pointer-events: none;
`

const ProfileIcon = styled.img`
  position: absolute;
  width: 150px;
  height: 150px;
  pointer-events: none;
`

export default ProfileInput
