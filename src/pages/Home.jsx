import React from 'react'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Search from '../components/Search'

import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  width: 100%;
`

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Container> */}
      <Intro />
      <Search />
      {/* </Container> */}
    </>
  )
}

export default Home
