import React from 'react'
import Intro from '../components/Intro'
import Movies from '../components/Movies'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import { movies } from '../data'

const Home = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Search />
      <Movies movies={movies} />
    </>
  )
}

export default Home
