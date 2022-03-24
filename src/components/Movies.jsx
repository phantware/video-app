import React from 'react'
import Movie from './Movie'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-wrap: wrap;
  margin-bottom: 50px;
`
const Movies = ({ movies }) => {
  return (
    <Container>
      {movies?.map((single) => (
        <Movie key={single.imdbID} single={single} />
      ))}
    </Container>
  )
}

export default Movies
