import React, { useState } from "react";

import { Content, ContentOuter } from "../components/styled";
import styled from "styled-components";
import ReviewBox from "../components/Myreview/ReviewBox";

function MyReview() {
  // const [notifimodalOpen, setNotifimodalOpen] = useState(false);
  const [starmodalOpen, setStarmodalOpen] = useState(false);

  const handleClick = () => {
    setNotifimodalOpen(true);
  };

  const Btn = styled.button`
    width: 90px;
    height: 30px;
    border-radius: 5px;
    font-weight: 600;
    color: white;
    background-color: #60a1ff;
    border: 1px solid transparent;
  `;

  const handleStarClick = () => {
    setStarmodalOpen(true); // 수정: setStarmodalOpen으로 변경
  };

  return (
    <>
      <ContentOuter>
        <Content>
          {/* <Btn onClick={handleClick}>공지사항</Btn>
                    {notifimodalOpen && (
                        <NotifiModal setNotifimodalOpen={setNotifimodalOpen} />
                    )} */}
          <ReviewBox />
        </Content>
      </ContentOuter>
    </>
  );
}

export default MyReview;
