import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const publicUrl = process.env.PUBLIC_URL
  const navigate = useNavigate()
  const [bannerInfo, setBannerInfo] = useState([
    { bannerId: 0, photo: '', search: '', alt: '' },
  ])

  useEffect(() => {
    setBannerInfo([
      {
        bannerId: 0,
        photo: `${publicUrl}/assets/Banner.jpg`,
        search: '달달한',
        alt: 'sweet banner image',
      },
      {
        bannerId: 1,
        photo: `${publicUrl}/assets/Banner.jpg`,
        search: '달달한',
        alt: 'sweet banner image',
      },
    ])
  }, [])

  return (
    <BannerContainer>
      {bannerInfo.map((el) => (
        <BannerImg
          onClick={() =>
            navigate(`/recipelist`, { state: { where: 'banner' } })
          }
          src={el.photo}
          alt={el.alt}
          key={el.bannerId + el.search}
        />
      ))}
    </BannerContainer>
  )
}

const BannerContainer = styled.section`
  display: flex;
  flex-flow: row nowrap;
  width: 85vw;
  margin-top: 60px;
  overflow: scroll;
  background-color: yellow;
`
const BannerImg = styled.img`
  flex-shrink: 0;
  width: 85vw;
  height: 520px;
  cursor: pointer;
`

export default Banner
