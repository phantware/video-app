import React from 'react'
// import rectangle from '../assets/images/Rectangle 5.svg'

import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  margin-bottom: 98px;
`
const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 550px;
  object-fit: cover;
  margin-bottom: 98px;
  @media only screen and (max-width: 480px) {
    width: 100vw;
    height: 300px;
  }
`
const Title = styled.h3`
  position: absolute;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 80px;
  margin: 109px 1000px 0px 77px;
  line-height: 94px;
  letter-spacing: -0.05em;
  color: #ffffff;
  @media only screen and (max-width: 480px) {
    font-size: 40px;
    line-height: 55px;
    text-align: center;
    margin: 50px;
  }
`
const Intro = () => {
  return (
    <Container>
      <Image src='assets/images/Rectangle 5.svg' alt='intro-image' />
      <Title>Watch something incredible.</Title>
    </Container>
  )
}

export default Intro
