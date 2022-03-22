import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 150px;
  padding: 0 25px;
  background: #292929;
`
const Wrapper = styled.div`
  position: relative;
  width: 193px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 77px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
`
const Header = styled.h3`
  position: relative;
  text-align: center;
  font-weight: 300;
  margin: auto;
  color: #fff;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Header>MyTestApp</Header>
      </Wrapper>
    </Container>
  )
}

export default Navbar
