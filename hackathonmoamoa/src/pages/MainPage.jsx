import React from 'react'
import styled from 'styled-components';
import Nav from '../components/Layout/Nav';
import ContentBox from '../components/Layout/ContentBox';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  margin: -10px;
  background-color: #F3F7FC;

`


export default function MainPage() {
  return (
    <Container>      
      <Nav/>
      <ContentBox/>      
    </Container>
  )
}

