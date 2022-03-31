import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 95%;
  margin-top: 500px;
  margin-left: 77px;
  padding-bottom: 10px;
  @media only screen and (max-width: 480px) {
    margin-top: 230px;
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
const SearchCat = styled.p`
  font-family: 'DM Sans';
  font-style: italic;
  font-weight: 200;
  font-size: 30px;
  text-transform: capitalize;
  line-height: 31px;
  color: #000000;
  margin-top: 50px;

  @media only screen and (max-width: 480px) {
    font-size: 20px;
    line-height: 20px;
    margin: 0;
  }
`

const Search = ({ setSearch, search }) => {
  const searchMovie = (e) => {
    const { value } = e.target
    if (value === '') {
      setSearch('batman')
    } else {
      setSearch(value)
    }
  }

  return (
    <Container>
      <SearchPara>Search</SearchPara>
      <Input type='text' onChange={searchMovie} />
      <SearchCat>{search}</SearchCat>
    </Container>
  )
}

export default Search
