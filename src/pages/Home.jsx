import React from 'react'
import Intro from '../components/Intro'
import Movies from '../components/Movies'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import { movies } from '../data'
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
const Home = () => {
  return (
    <Container>
      <Navbar />
      <Intro />
      <Search />
      <Movies movies={movies} />
    </Container>
  )
}

export default Home
