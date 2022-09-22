import styled from 'styled-components'
import React from 'react'

import { dummyMyinfo } from '../dummy/termInfo'

const RepleCard = ({ repleId, profile, nickname, context, created_at }) => {
  const publicUrl = process.env.PUBLIC_URL

  const btnClickHanlder = (what) => {
    switch (what) {
      case 'modify':
        console.log('댓글을 수정하는 코드 백엔드로 전송')
        return
      case 'delete':
        console.log('댓글을 삭제하는 코드 백엔드로 전송')
        return
      default:
        return
    }
  }

  return (
    <RepleCardContainer>
      <RepleHeaderBox>
        <UserInfoBox>
          <Profile src={profile} />
          <Nickname>{nickname}</Nickname>
          <CreatedAt>{`${created_at.getFullYear()}-${
            created_at.getMonth() + 1
          }-${created_at.getDate()}`}</CreatedAt>
        </UserInfoBox>
        <BtnBox>
          {(repleId === dummyMyinfo.userId || dummyMyinfo.type === 'admin') && (
            <React.Fragment>
              <IconBtn
                onClick={() => btnClickHanlder('modify')}
                src={`${publicUrl}/assets/modify.png`}
              />
              <IconBtn
                onClick={() => btnClickHanlder('delete')}
                src={`${publicUrl}/assets/delete.png`}
              />
            </React.Fragment>
          )}
        </BtnBox>
      </RepleHeaderBox>
      <Context>{context}</Context>
    </RepleCardContainer>
  )
}

const RepleCardContainer = styled.li`
  margin-top: 15px;
`

const RepleHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const UserInfoBox = styled.figure`
  display: flex;
  align-items: flex-end;
  padding-left: 5px;
`

const Profile = styled.img`
  position: relative;
  top: 3px;
  width: 35px;
  height: 35px;
  border-radius: 100%;
`

const Nickname = styled.figcaption`
  font-size: 25px;
  font-weight: 600;
  color: #454545;
  margin: 0 10px;
`

const CreatedAt = styled.figcaption`
  font-size: 18px;
  font-weight: 600;
  color: #bfbfbf;
`

const BtnBox = styled.div`
  display: flex;
  align-items: flex-end;
`

const IconBtn = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`

const Context = styled.div`
  font-size: 18px;
  color: #686363;
  margin-top: 15px;
  padding: 2px;
`

export default RepleCard
