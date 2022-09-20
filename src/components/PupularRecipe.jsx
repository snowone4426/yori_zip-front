import styled from 'styled-components'
import { useState, useEffect } from 'react'

import TitleBox from './TitleBox'
import RecipeList from './RecipeList'

const PupularRecipe = () => {
  const publicUrl = process.env.PUBLIC_URL
  const [recipeArr, setRecipeArr] = useState([
    {
      recipeId: 0,
      title: '',
      subTitle: '',
      thumbnail: '',
      level: '',
      time: '',
      starScore: '',
      state: '',
      created_at: new Date(),
    },
  ])

  useEffect(() => {
    setRecipeArr([
      {
        recipeId: 0,
        title: '당근 케이크',
        subTitle: '촉촉하고 진짜 맛있는',
        thumbnail: `${publicUrl}/assets/고기구이.jpg`,
        level: '중급',
        time: '70분',
        starScore: '4.0',
        state: '',
        created_at: new Date('2022-09-01'),
      },
      {
        recipeId: 1,
        title: '당근 케이크',
        subTitle: '촉촉하고 진짜 맛있는',
        thumbnail: `${publicUrl}/assets/고기구이.jpg`,
        level: '중급',
        time: '70분',
        starScore: '4.0',
        state: 'hot',
        created_at: new Date('2022-09-01'),
      },
      {
        recipeId: 2,
        title: '당근 케이크',
        subTitle: '촉촉하고 진짜 맛있는',
        thumbnail: `${publicUrl}/assets/고기구이.jpg`,
        level: '중급',
        time: '70분',
        starScore: '4.0',
        state: '',
        created_at: new Date(),
      },
      {
        recipeId: 3,
        title: '당근 케이크',
        subTitle: '촉촉하고 진짜 맛있는',
        thumbnail: `${publicUrl}/assets/고기구이.jpg`,
        level: '중급',
        time: '70분',
        starScore: '4.0',
        state: 'hot',
        created_at: new Date(),
      },
      {
        recipeId: 4,
        title: '당근 케이크',
        subTitle: '촉촉하고 진짜 맛있는',
        thumbnail: `${publicUrl}/assets/고기구이.jpg`,
        level: '중급',
        time: '70분',
        starScore: '4.0',
        state: 'hot',
        created_at: new Date(),
      },
      {
        recipeId: 5,
        title: '당근 케이크',
        subTitle: '촉촉하고 진짜 맛있는',
        thumbnail: `${publicUrl}/assets/고기구이.jpg`,
        level: '중급',
        time: '70분',
        starScore: '4.0',
        state: 'hot',
        created_at: new Date(),
      },
      {
        recipeId: 6,
        title: '당근 케이크',
        subTitle: '촉촉하고 진짜 맛있는',
        thumbnail: `${publicUrl}/assets/고기구이.jpg`,
        level: '중급',
        time: '70분',
        starScore: '4.0',
        state: 'hot',
        created_at: new Date(),
      },
      {
        recipeId: 7,
        title: '당근 케이크',
        subTitle: '촉촉하고 진짜 맛있는',
        thumbnail: `${publicUrl}/assets/고기구이.jpg`,
        level: '중급',
        time: '70분',
        starScore: '4.0',
        state: 'hot',
        created_at: new Date(),
      },
    ])
  }, [])
  return (
    <PupularRecipeContainer>
      <TitleBox
        title="Popular pecipes"
        subTitle="많이 찾으시는 레시피를 소개합니다"
      />
      <RecipeList recipeArr={recipeArr} />
    </PupularRecipeContainer>
  )
}

const PupularRecipeContainer = styled.section`
  width: 1320px;
  height: 910px;
  margin-top: 110px;
`

export default PupularRecipe
