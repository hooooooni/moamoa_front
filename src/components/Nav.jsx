import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import {
  Navbar,
  MainLogo,
  Nav_Pages,
  StoreMap,
  LookforFav,
  Navbar_Menu,
  Navbar_Logout,
  Nav_Logout_Box,
  MyreviewBox,
} from "./styled";

import { BsPerson, BsMap, BsBullseye } from "react-icons/bs";
import { GrAd } from "react-icons/gr";
import { AiOutlineBell } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { GrEmptyCircle } from "react-icons/gr";
import { HiPencilAlt } from "react-icons/hi";
import axios from "axios";

export default function Nav() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://13.209.111.199/api/kakao/logout",
        {},
        {
          withCredentials: true, // 쿠키 포함 설정
        }
      );
      if (response.status === 200) {
        // 카카오 로그아웃 성공
        console.log("Kakao logout successful");
        GotoSignUp();
        // 추가적인 로직이나 페이지 이동 등을 수행할 수 있습니다.
      }
    } catch (error) {
      console.error("Kakao logout failed:", error);
    }
  };

  const GotoSignUp = () => {
    navigate("/");
  };

  const activeStyle = {
    backgroundColor: "#60A1FF",
    color: "#ffffff ",
    textDecoration: "none",
    width: "100%",
    height: "100%",
    borderRadius: "8px",
  };
  const nonactiveStyle = {
    backgroundColor: "#F3F7FC",
    color: "#000000",
    textDecoration: "none",
    width: "100%",
    height: "100%",
    borderRadius: "8px",
  };

  return (
    <>
      <Navbar>
        <Navbar_Menu>
          <MainLogo>
            <img
              src={`/img/Moamoalogo.png`}
              width="100%"
              height="48%"
              onClick={() => navigate("/App/MainPage")}
            />
          </MainLogo>

          <Nav_Pages>
            <NavLink
              to={"/App/Mainpage"}
              style={({ isActive }) =>
                isActive ? activeStyle : nonactiveStyle
              }
            >
              <StoreMap>
                <BsMap />
                맛집 지도
              </StoreMap>
            </NavLink>

            <NavLink
              to={"/App/LookForPage"}
              style={({ isActive }) =>
                isActive ? activeStyle : nonactiveStyle
              }
            >
              <LookforFav>
                <BsBullseye />
                취향 둘러보기
              </LookforFav>
            </NavLink>

            <NavLink
              to={"/App/MyReview"}
              style={({ isActive }) =>
                isActive ? activeStyle : nonactiveStyle
              }
            >
              <MyreviewBox>
                <HiPencilAlt />
                리뷰 관리
              </MyreviewBox>
            </NavLink>
          </Nav_Pages>
        </Navbar_Menu>

        <Navbar_Logout>
          <Nav_Logout_Box onClick={handleLogout}>
            <MdLogout />
            로그아웃
          </Nav_Logout_Box>
        </Navbar_Logout>
      </Navbar>
    </>
  );
}
