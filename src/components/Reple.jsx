import styled from 'styled-components'

import RepleCard from './RepleCard'
import RepleInput from './RepleInput'

const Reple = ({ reple }) => {
  return (
    <RepleFrame>
      <RepleHeader>{`댓글 (${reple.length})`}</RepleHeader>
      <RepleInput />
      {reple.map((el) => (
        <RepleCard {...el} key={el.repleId} />
      ))}
    </RepleFrame>
  )
}

const RepleFrame = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  padding: 10px;
`

const RepleHeader = styled.li`
  align-self: flex-start;
  font-size: 35px;
  font-weight: 600;
  margin: 20px 0 0 -10px;
`

export default Reple
