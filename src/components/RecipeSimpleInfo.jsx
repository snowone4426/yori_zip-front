import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { dummyMyinfo } from '../dummy/termInfo'

const RecipeSimpleInfo = ({ simpleInfo, isBookMark, setIsBookMark }) => {
  const navigate = useNavigate()
  const {
    title,
    subtitle,
    description,
    thumbnail,
    level,
    time,
    starScore,
    created_at,
    userId,
    nickname,
    profile,
  } = simpleInfo
  const canSee = dummyMyinfo.type === 'admin' || userId === dummyMyinfo.userId
  const publicUrl = process.env.PUBLIC_URL

  const bookMarkHanlder = () => {
    if (!dummyMyinfo.userId) {
      navigate('/signin', { state: { where: 'comment' } })
    }
    //대충 서버에 요청을 보내는 코드
    console.log(
      '서버에 북마크 변경 요청을 보내고, 변경값을 받은 다음 스테이트를 변경',
    )
    setIsBookMark(!isBookMark)
  }

  const btnClickHanlder = (what) => {
    switch (what) {
      case 'modify':
        console.log('글을 수정하는 코드 백엔드로 전송')
        return
      case 'delete':
        console.log('글을 삭제하는 코드 백엔드로 전송')
        return
      default:
        return
    }
  }

  return (
    <RecipeSimpleInfoContainer>
      <ThumpnailFrame>
        <Thummail src={thumbnail} alt={title} />
      </ThumpnailFrame>
      <HeaderFrame>
        <TitleFrame>
          <SubTitle>{subtitle}</SubTitle>
          <Title>{title}</Title>
          <MakeInfoFrame>
            <InfoFrame>
              <InfoIcon src={`${publicUrl}/assets/level.png`} />
              {level}
            </InfoFrame>
            <InfoFrame>
              <InfoIcon src={`${publicUrl}/assets/time.png`} />
              {time}
            </InfoFrame>
            <InfoFrame>
              <InfoIcon src={`${publicUrl}/assets/starScore.png`} />
              {starScore}
            </InfoFrame>
          </MakeInfoFrame>
        </TitleFrame>
        <BtnFrame>
          {canSee && (
            <>
              <SideBtn
                onClick={() => btnClickHanlder('modify')}
                src={`${publicUrl}/assets/modify.png`}
              />
              <DeleteBtn
                onClick={() => btnClickHanlder('delete')}
                src={`${publicUrl}/assets/delete.png`}
              />
            </>
          )}
          <BookMarkBtn
            isBookMark={isBookMark}
            src={`${publicUrl}/assets/bookmark.png`}
            onClick={bookMarkHanlder}
          />
        </BtnFrame>
      </HeaderFrame>
      <DescriptionFrame>
        <CreatorInfo>
          <Profile src={profile} />
          <TextFrame>
            <UserName>{nickname}</UserName>
            <CreateTime>{`${created_at.getFullYear()}-${
              created_at.getMonth() + 1
            }-${created_at.getDate()}`}</CreateTime>
          </TextFrame>
        </CreatorInfo>
        <Description>{description}</Description>
      </DescriptionFrame>
    </RecipeSimpleInfoContainer>
  )
}
const RecipeSimpleInfoContainer = styled.ul`
  width: 910px;
`

const ThumpnailFrame = styled.li`
  display: flex;
  justify-content: center;
`

const Thummail = styled.img`
  width: 910px;
  height: 606px;
  border: 2px solid #aaaaaa;
`

const HeaderFrame = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #bebebe;
  margin-top: 30px;
  padding: 0 5px 8px 0;
`

const TitleFrame = styled.div``

const SubTitle = styled.div`
  font-size: 24px;
  opacity: 0.9;
`

const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-top: 8px;
`

const MakeInfoFrame = styled.div`
  display: flex;
  margin: 10px 0 0 3px;
`

const InfoIcon = styled.img`
  width: 21px;
  height: 21px;
`

const InfoFrame = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #757474;
`

const BtnFrame = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 8px;
`

const SideBtn = styled.img`
  width: 54px;
  height: 54px;
  cursor: pointer;
`

const DeleteBtn = styled(SideBtn)`
  opacity: 0.75;
`

const BookMarkBtn = styled(SideBtn)`
  opacity: ${({ isBookMark }) => (isBookMark ? 1 : 0.75)};
`

const DescriptionFrame = styled.li`
  border-bottom: 2px solid #bebebe;
  pointer-events: none;
`

const CreatorInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 21px 0 10px 13px;
`

const Profile = styled.img`
  width: 57px;
  height: 57px;
  border: 1px solid #8a8686;
  overflow: hidden;
  border-radius: 100%;
  margin-right: 8px;
`
const TextFrame = styled.div``

const UserName = styled.div`
  font-size: 22px;
  font-weight: 600;
`

const CreateTime = styled.div`
  font-size: 15px;
  color: #828282;
  margin-top: 3px;
`

const Description = styled.div`
  font-size: 15px;
  color: #464646;
  word-break: keep-all;
  padding: 13px;
`

export default RecipeSimpleInfo
