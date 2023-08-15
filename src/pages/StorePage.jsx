import React, { useState, useEffect } from "react";

import { Content, ContentOuter } from "../components/Styled";
import {
  StoreBmakrwrapper,
  StoreChat,
  StoreChatbottom,
  StoreChatbottominput,
  StoreChatbottomsend,
  StoreChatbottomsendtext,
  StoreChatmiddle,
  StoreChattop,
  StoreChattoplive,
  StoreKeyWord,
  StoreKeyWordcontent,
  StoreKeyWordmoamoa,
  StorePageBox,
  Storefunc,
  Storeinfo,
  Storeinfo1,
  Storeinfo3call,
  Storeinfo3leftheader,
  Storeinfo3leftwrapper,
  Storeinfo3place,
  Storeinfo3rightcontent,
  Storeinfo3rightheader,
  Storeinfo3rightwrapper,
  Storeinfo3takeout,
  Storeinfo3time,
  Storeinfo4header,
  Storeinfo4slide,
  Storeinfobox1,
  Storeinfobox2,
  Storeinfobox3,
  Storeinfobox4,
  Storeinfobox5,
  Storeinfobox5left,
  Storeinfobox5leftheader,
  Storeinfobox5leftpicbox,
  Storeinfobox5picleft,
  Storeinfobox5picright,
  Storeinfobox5right,
  Storeinfobox5rightcontent,
  Storeinfobox5rightheader,
  Storeinfobox5rightprofile,
  Storeinfobox5rightprofileiconbox,
  Storeinfobox5rightvalue,
  Storeinfobox5wrapper,
} from "./Pagesstyled";
import styled from "styled-components";

import { HiOutlineSpeakerphone } from "react-icons/hi";
import { GrLocation, GrRefresh, GrGallery } from "react-icons/gr";
import { BsClock, BsHouse, BsBookmark, BsChatDots } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function StorePage() {
  const location = useLocation();
  const Box = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Slidenotify = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    border-radius: 8px;
  `;
  const Slidereview = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    border-radius: 8px;
  `;
  return (
    <>
      <ContentOuter>
        <Content>
          <StorePageBox>
            <Storeinfo>
              <Storeinfobox1>
                <Storeinfo1>
                  <StoreBmakrwrapper>
                    <BsBookmark />
                  </StoreBmakrwrapper>
                </Storeinfo1>
              </Storeinfobox1>

              <Storeinfobox2>
                <Box>
                  <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    onSwiper={(swiper) => swiper}
                    onSlideChange={() => console.log("slide change")}
                  >
                    <SwiperSlide>
                      <Slidenotify>공지사항1</Slidenotify>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Slidenotify>공지사항2</Slidenotify>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Slidenotify>공지사항3</Slidenotify>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Slidenotify>공지사항4</Slidenotify>
                    </SwiperSlide>
                  </Swiper>
                </Box>
              </Storeinfobox2>
              <Storeinfobox3>
                <Storeinfo3leftwrapper>
                  <Storeinfo3leftheader>
                    {/* {JSON.stringify(text,null,2)} */}
                    {location.state.storename}
                  </Storeinfo3leftheader>

                  <Storeinfo3place>
                    <GrLocation />
                  </Storeinfo3place>
                  <Storeinfo3time>
                    <BsClock />
                  </Storeinfo3time>
                  <Storeinfo3takeout>
                    <BsHouse />
                  </Storeinfo3takeout>
                  <Storeinfo3call>
                    <IoCallOutline />
                  </Storeinfo3call>
                </Storeinfo3leftwrapper>
                <Storeinfo3rightwrapper>
                  <Storeinfo3rightheader>메뉴정보</Storeinfo3rightheader>
                  <Storeinfo3rightcontent></Storeinfo3rightcontent>
                </Storeinfo3rightwrapper>
              </Storeinfobox3>
              <Storeinfobox4>
                <Storeinfo4header>
                  방문자 리뷰
                  <img src={`/img/star.png`} width="20px" height="20px" />
                  평점:
                </Storeinfo4header>
                <Storeinfo4slide>
                  <Box>
                    <Swiper
                      // install Swiper modules
                      modules={[Navigation, Pagination]}
                      spaceBetween={10}
                      slidesPerView={3}
                      navigation
                      onSwiper={(swiper) => swiper}
                      onSlideChange={() => console.log("slide change")}
                    >
                      <SwiperSlide>
                        <Slidereview>방문자리뷰1</Slidereview>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Slidereview>방문자리뷰2</Slidereview>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Slidereview>방문자리뷰3</Slidereview>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Slidereview>방문자리뷰4</Slidereview>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Slidereview>방문자리뷰5</Slidereview>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Slidereview>방문자리뷰6</Slidereview>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Slidereview>방문자리뷰7</Slidereview>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Slidereview>방문자리뷰8</Slidereview>
                      </SwiperSlide>
                    </Swiper>
                  </Box>
                </Storeinfo4slide>
              </Storeinfobox4>
              <Storeinfobox5>
                <Storeinfobox5wrapper>
                  <Storeinfobox5left>
                    <Storeinfobox5leftheader>상세 리뷰</Storeinfobox5leftheader>
                    <Storeinfobox5leftpicbox>
                      <Storeinfobox5picleft></Storeinfobox5picleft>
                      <Storeinfobox5picright></Storeinfobox5picright>
                    </Storeinfobox5leftpicbox>
                  </Storeinfobox5left>
                  <Storeinfobox5right>
                    <Storeinfobox5rightheader>
                      <Storeinfobox5rightprofile>
                        <Storeinfobox5rightprofileiconbox></Storeinfobox5rightprofileiconbox>
                        맛집탐방러
                      </Storeinfobox5rightprofile>
                      <Storeinfobox5rightvalue>평점:</Storeinfobox5rightvalue>
                    </Storeinfobox5rightheader>
                    <Storeinfobox5rightcontent>
                      또 방문하고 싶은 카페
                    </Storeinfobox5rightcontent>
                  </Storeinfobox5right>
                </Storeinfobox5wrapper>
              </Storeinfobox5>
            </Storeinfo>
            <Storefunc>
              <StoreChat>
                <StoreChattop>
                  <StoreChattoplive>
                    <BsChatDots fontSize={"20px"} />
                    실시간 채팅
                  </StoreChattoplive>
                  <GrRefresh fontSize={"20px"} style={{ color: "white" }} />
                </StoreChattop>
                <StoreChatmiddle></StoreChatmiddle>
                <StoreChatbottom>
                  <StoreChatbottominput>
                    <input placeholder="메세지를 입력해주세요"></input>
                  </StoreChatbottominput>
                  <StoreChatbottomsend>
                    <GrGallery />
                    <StoreChatbottomsendtext>보내기</StoreChatbottomsendtext>
                  </StoreChatbottomsend>
                </StoreChatbottom>
              </StoreChat>
              <StoreKeyWord>
                <StoreKeyWordmoamoa>모아모아</StoreKeyWordmoamoa>
                <StoreKeyWordcontent></StoreKeyWordcontent>
              </StoreKeyWord>
            </Storefunc>
          </StorePageBox>
        </Content>
      </ContentOuter>
    </>
  );
}

export default StorePage;
