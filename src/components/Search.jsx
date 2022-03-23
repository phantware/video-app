import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 95%;
  margin-top: 600px;
  margin-left: 77px;
  padding-bottom: 100px;
`
const SearchPara = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  color: #000000;
`
const Input = styled.input`
  width: 97%;
  height: 0%;
  background: #ffffff;
  margin: 12px 0px;
  padding: 10px;
  font-size: 20px;
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
