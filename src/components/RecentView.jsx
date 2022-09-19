import styled from 'styled-components'

import RecentCard from './RecentCard'

const RecentView = ({ setIsSubNavOpen }) => {
  const viewArr = [
    { id: 0, photo: '', name: '이름1' },
    { id: 1, photo: '', name: '이름2' },
    { id: 2, photo: '', name: '이름3' },
    { id: 3, photo: '', name: '이름4' },
    { id: 4, photo: '', name: '이름5' },
    { id: 5, photo: '', name: '이름6' },
    { id: 6, photo: '', name: '이름7' },
  ]

  return (
    <RecentViewContainer>
      {viewArr.map((el) => (
        <RecentCard {...el} key={el.id} setIsSubNavOpen={setIsSubNavOpen} />
      ))}
    </RecentViewContainer>
  )
}

const RecentViewContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 30px;
  /* overflow: scroll; */
`

export default RecentView
