import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate()
  const [bannerInfo, setBannerInfo] = useState([
    { bannerId: 0, photo: '', search: '', alt: '' },
  ])

  useEffect(() => {
    fetch('http://localhost:8080/yori_zip-server/MainController?m=banner')
      .then((response) => response.json())
      .then((response) => {
        const bannerArr = []

        response.map((el) =>
          el.push({
            bannerId: response.banner_id,
            photo: response.photo,
            alt: response.alt,
            search: response.search,
          }),
        )

        setBannerInfo(bannerArr)
      })
  }, [])

  return (
    <BannerContainer>
      {bannerInfo.map((el) => (
        <BannerImg
          onClick={() =>
            navigate(`/recipelist/search`, { state: { where: 'banner' } })
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
`
const BannerImg = styled.img`
  flex-shrink: 0;
  width: 85vw;
  height: 520px;
  cursor: pointer;
`

export default Banner
