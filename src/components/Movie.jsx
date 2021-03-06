import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
  border-radius: 100px;
`
const Images = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`
const Nametitle = styled.h4`
  position: absolute;
  top: 50%;
  left: 50%;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 31px;
  text-align: center;
  color: #ffffff;
  transform: translate(-50%, -50%);
`

const Movie = ({ single }) => {
  const { Title, Poster } = single

  return (
    <Container>
      <Images
        src={
          Poster === ''
            ? 'https://www.blog.motifphotos.com/wp-content/uploads/2020/02/video-1200x800.jpg'
            : Poster
        }
      />
      <Nametitle>{Title}</Nametitle>
    </Container>
  )
}

export default Movie
