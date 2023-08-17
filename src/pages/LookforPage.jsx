import React, { useState } from "react";
import * as S from "../components/styled";
import Scrap from "../components/scrap/Scrap";
function LookForPage() {
  const [notifimodalOpen, setNotifimodalOpen] = useState(false);

  const handleClick = () => {
    setNotifimodalOpen(true);

    const joinData = {
      userId,
      password,
    };
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
      <S.ContentOuter>
        <S.Content>
          <Scrap />
        </S.Content>
      </S.ContentOuter>
    </>
  );
}

export default LookForPage;
