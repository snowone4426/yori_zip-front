import styled from 'styled-components'

const SignUpHeader = () => {
  return (
    <SignUpHeaderContainer>
      <HeaderInnerFrame>
        <HeaderTitle>
          <p>Logo에서 레시피를 공유하고</p>
          <p>마음에 드는 레시피도 찾아보세요</p>
        </HeaderTitle>
        <LocationSpotContainer>
          <LocationSpot path="" />
          <LocationSpot />
        </LocationSpotContainer>
      </HeaderInnerFrame>
    </SignUpHeaderContainer>
  )
}

const SignUpHeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 205px;
  background-color: #f3aa5d;
`

const HeaderInnerFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 940px;
  height: 100%;
  pointer-events: none;
`

const HeaderTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;

  & > p {
    margin-top: 10px;
  }
`

const LocationSpotContainer = styled.div`
  display: flex;
  margin: 10px;
`

const LocationSpot = styled.div`
  width: 10px;
  height: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 100%;
  margin-left: 5px;
  background-color: ${({ path }) => (path === '' ? '#FF5C00' : '#D9D9D9')};
`

export default SignUpHeader
