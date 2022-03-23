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
  /* border-radius: 12px; */
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
  const { Title, Year, imdbID, Type, Poster } = single

  return (
    <Container>
      <Images src={Poster} />
      <Nametitle>{Title}</Nametitle>
    </Container>
  )
}

export default Movie
