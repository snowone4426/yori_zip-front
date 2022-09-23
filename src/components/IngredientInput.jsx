import { useEffect } from 'react'
import styled from 'styled-components'

const IngredientInput = ({
  groupNameArr,
  setGroupNameArr,
  ingredientArr,
  setIngredientArr,
}) => {
  const publicUrl = process.env.PUBLIC_URL
  // const [groupNameArr, setGroupNameArr] = useState(['', ''])
  // const [ingredientArr, setIngredientArr] = useState([
  //   [{ name: '', quentity: '' }],
  //   [{ name: '', quentity: '' }],
  // ])

  const isFill = !!groupNameArr[groupNameArr.length - 1]

  useEffect(() => {
    if (isFill) {
      setGroupNameArr([...groupNameArr, ''])
      setIngredientArr([...ingredientArr, [{ name: '', quentity: '' }]])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupNameArr])

  const groupNameHanlder = (e, idx) => {
    const modifyGroupNameArr = [...groupNameArr]

    modifyGroupNameArr[idx] = e.target.value
    setGroupNameArr(modifyGroupNameArr)
  }

  // const EmptyChecker = () => {
  //   if (
  //     groupNameArr.length > 2 &&
  //     !isFill &&
  //     !ingredientArr[ingredientArr.length - 1][0].name &&
  //     !ingredientArr[ingredientArr.length - 1][0].quentity
  //   ) {
  //     setGroupNameArr(groupNameArr.slice(0, groupNameArr.length - 1))
  //     setIngredientArr(ingredientArr.slice(0, ingredientArr.length - 1))
  //   }
  // }

  const ingredientHanlder = (e, groupIdx, idx, key) => {
    const modifyingredientArr = [...ingredientArr]

    modifyingredientArr[groupIdx][idx][key] = e.target.value
    setIngredientArr(modifyingredientArr)
  }

  const ingredientAddHanlder = (groupIdx) => {
    const modifyingredientArr = [...ingredientArr]

    modifyingredientArr[groupIdx].push({ name: '', quentity: '' })
    setIngredientArr(modifyingredientArr)
  }

  const ingredientDeleteHanlder = (groupIdx, idx) => {
    const modifyingredientArr = [...ingredientArr]

    modifyingredientArr[groupIdx] = modifyingredientArr[groupIdx]
      .slice(0, idx)
      .concat(
        modifyingredientArr[groupIdx].slice(
          idx + 1,
          modifyingredientArr[groupIdx].length,
        ),
      )
    setIngredientArr(modifyingredientArr)
  }

  return (
    <IngredientInputContainer>
      <IngredientFrame>
        {groupNameArr.map((el, groupIdx) => (
          <GroupBox key={groupIdx}>
            <GroupNameLabel>
              <input
                value={el}
                placeholder="그룹 명..."
                onChange={(e) => groupNameHanlder(e, groupIdx)}
              />
            </GroupNameLabel>
            <IngredientList>
              {ingredientArr[groupIdx].map((it, idx) => (
                <Ingredient key={`${groupIdx}${idx}`}>
                  <input
                    value={it.name}
                    placeholder="재료 명..."
                    onChange={(e) =>
                      ingredientHanlder(e, groupIdx, idx, 'name')
                    }
                  />
                  <input
                    value={it.quentity}
                    placeholder="재료의 양..."
                    onChange={(e) =>
                      ingredientHanlder(e, groupIdx, idx, 'quentity')
                    }
                  />
                  {idx !== ingredientArr[groupIdx].length - 1 ? (
                    <AddDelete
                      src={`${publicUrl}/assets/close.png`}
                      alt="addButten"
                      isVisivle={true}
                      isDelete={true}
                      onClick={() => ingredientDeleteHanlder(groupIdx, idx)}
                    />
                  ) : (
                    <AddDelete
                      src={`${publicUrl}/assets/close.png`}
                      isVisivle={
                        !!ingredientArr[groupIdx][idx]['name'] &&
                        !!ingredientArr[groupIdx][idx]['quentity']
                      }
                      alt="deleteButten"
                      isDelete={false}
                      onClick={() => ingredientAddHanlder(groupIdx)}
                    />
                  )}
                </Ingredient>
              ))}
            </IngredientList>
          </GroupBox>
        ))}
      </IngredientFrame>
    </IngredientInputContainer>
  )
}

const IngredientInputContainer = styled.section`
  margin-top: 27px;
`

const IngredientFrame = styled.ul`
  display: flex;
  flex-direction: column;
  border: 1px solid #aaaaaa;
`

const GroupBox = styled.li`
  display: flex;
  border-bottom: 1px solid #aaaaaa;
`

const GroupNameLabel = styled.label`
  & > input {
    width: 200px;
    font-size: 20px;
    padding: 5px;
  }
`

const IngredientList = styled.ul`
  border-left: 1px solid #aaaaaa;
`

const Ingredient = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;

  & input {
    font-size: 15px;

    &:nth-last-child(2) {
      text-align: right;
    }
  }
`

const AddDelete = styled.img`
  position: relative;
  top: 2px;
  width: 15px;
  height: 15px;
  margin-left: 10px;
  transform: ${({ isDelete }) => (isDelete ? '' : 'rotate(45deg)')};
  visibility: ${({ isVisivle }) => (isVisivle ? 'default' : 'hidden')};
  opacity: 0.8;
`

export default IngredientInput
