import styled from 'styled-components'

const Footer = () => {
  const memberInfo = [
    {
      name: '한태규',
      github: 'https://github.com/snowone4426',
    },
    {
      name: '박은선',
      github: '',
    },
    {
      name: '김원근',
      github: '',
    },
    {
      name: '이선진',
      github: '',
    },
    {
      name: '윤정은',
      github: '',
    },
  ]
  const publicUrl = process.env.PUBLIC_URL

  return (
    <FooterContainer>
      <InfoContainer>
        <div>Ict Team 2</div>
        <div>서울특별시 마포구 백범로 23 케이터틀 3층</div>
        <div>Copyright ⓒ teagyu co. All Rights Reserved.</div>
      </InfoContainer>
      <MemberContainer>
        {memberInfo.map((el, idx) => (
          <a href={el.github} key={idx + el.name}>
            <img src={`${publicUrl}/assets/github.png`} alt="github icon" />
            <div>{el.name}</div>
          </a>
        ))}
      </MemberContainer>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 140px;
  padding: 0 20px;
  background-color: #f4b18a;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > div:first-child {
    font-size: 32px;
    font-weight: 600;
  }

  & > div:nth-child(2) {
    font-size: 22px;
    padding: 10px;
  }

  & > div:last-child {
    font-size: 24px;
  }
`

const MemberContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-flow: row wrap;
  flex: wrap;
  width: 420px;

  & > a {
    display: flex;
    align-items: center;
    width: 120px;
    font-size: 24px;
    text-decoration: none;
    color: black;
    white-space: nowrap;
    margin: 5px 0px 5px 10px;
    cursor: pointer;
  }

  img {
    width: 36px;
    margin-right: 5px;
  }
`

export default Footer
