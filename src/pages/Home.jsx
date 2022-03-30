import React, { useEffect, useState } from 'react'
import Intro from '../components/Intro'
import Movies from '../components/Movies'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
// import { movies } from '../data'
import styled from 'styled-components'
import axios from 'axios'

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
  const [mofi, setMofi] = useState([])
  const [search, setSearch] = useState('batman')
  const fetchMovies = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?s=${search}&page=10&apikey=678af5b2`
    )
    setMofi(res.data.Search)
  }

  useEffect(() => {
    fetchMovies()
  }, [search])

  // if (search.length === 0) {
  //   return (
  //     // <h1>hello</h1>
  //     <Container>
  //       <Navbar />
  //       <Intro />
  //       <Search />
  //     </Container>
  //   )
  // }
  return (
    <Container>
      <Navbar />
      <Intro />
      <Search fetchMovies={fetchMovies} setSearch={setSearch} />
      <Movies movies={mofi} />
    </Container>
  )
}

export default Home
