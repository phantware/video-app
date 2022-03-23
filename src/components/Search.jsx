import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 95%;
  margin-top: 600px;
  margin-left: 77px;
  padding-bottom: 100px;
  @media only screen and (max-width: 480px) {
    margin-top: 330px;
    margin-left: 30px;
    padding-bottom: 20px;
  }
`
const SearchPara = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  color: #000000;
  @media only screen and (max-width: 480px) {
    font-size: 20px;
    line-height: 20px;
    margin: 0;
  }
`
const Input = styled.input`
  width: 97%;
  background: #ffffff;
  margin: 12px 0px;
  padding: 10px;
  font-size: 20px;
  @media only screen and (max-width: 480px) {
    width: 90%;
    margin: 10px 0px;
    font-size: 10px;
  }
`

const Search = () => {
  return (
    <Container>
      <SearchPara>Search</SearchPara>
      <Input type='text' />
    </Container>
  )
}

export default Search
