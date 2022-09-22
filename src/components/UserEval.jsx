import styled from 'styled-components'

import StarScore from './StarScore'
import Reple from './Reple'

const UserEval = ({ reple }) => {
  return (
    <UserEvaluationContainer>
      <StarScore />
      <Reple reple={reple} />
    </UserEvaluationContainer>
  )
}

const UserEvaluationContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
`

export default UserEval
