import React,{useState} from 'react'
import { Content, ContentOuter } from '../components/Styled'
import NotifiModal from '../Modals/NotifiModal'
import styled from 'styled-components';

function Myreview() {
  const [notifimodalOpen, setNotifimodalOpen] =useState(false);

  const handleClick =()=>{
    setNotifimodalOpen(true);
  }

  
   const Btn= styled.button`
  width:90px;
  height: 30px;
  border-radius: 5px;
  font-weight: 600;
  color:white;
  background-color: #60A1FF;
  border:1px solid transparent;

`

  return (
    <>
      <ContentOuter>
        <Content>

        <Btn onClick={handleClick}>공지사항</Btn> 
          {notifimodalOpen && (
          <NotifiModal setNotifimodalOpen={setNotifimodalOpen}/>
          )}


        </Content>
      </ContentOuter>
    </>
  )
}

export default Myreview