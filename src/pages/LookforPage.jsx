import React, { useState } from "react";
import { Content, ContentOuter } from "../components/Styled";
import NotifiModal from "../Modals/NotifiModal";
import styled from "styled-components";
import Scrap from "../components/scrap/Scrap"
function LookforPage() {

  const handleClick = () => {
    setNotifimodalOpen(true);

    axios
      .post("http://127.0.0.1:8000/api/login", {
        userId,
        password,
      })
      .then((lion) => {
        console.log(lion);
      })
      .catch((err) => {
        console.log(err);
      });

    instance.post("/login", {
      userId: userId,
    });
  };

  return (
    <>
      <ContentOuter>
        <Content>
          <Scrap />
        </Content>
      </ContentOuter>
    </>
  );
}

export default LookforPage;
