import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 150px;
  background: #292929;
`
const Wrapper = styled.div`
  width: 193px;
  height: 60px;
  margin: 0px 0px 54px 96px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
`
const Header = styled.h3`
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
