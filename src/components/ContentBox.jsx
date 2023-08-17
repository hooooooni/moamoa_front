import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as S from "./styled";
import { PiForkKnife } from "react-icons/pi";
import axios from "axios";
// import Location from './Layout/Location';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import Scrap_black from "../../src/components/image/scrap_black.svg";
import Scrap_white from "../../src/components/image/scrap_white.svg";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";
import Location from "./Layout/Location";

export default function ContentBox() {
  const [text, setText] = useState([]);
  const [scrapStates, setScrapStates] = useState({});

  const navigate = useNavigate();

  const mainpagescrap = async (store_id) => {
    const rsp = await axios.post(
      `http://13.209.111.199/api/store/${store_id}/scrap`,
      {},
      { withCredentials: true }
    );
    fetchData();
    console.log(rsp.data);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://13.209.111.199/api/store/get_near_store",
        {
          withCredentials: true,
        }
      );
      setText(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("err");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const toggleScrap = (store_id) => {
    setScrapStates((prevState) => ({
      ...prevState,
      [store_id]: !prevState[store_id],
    }));
  };

  const handleSlideClick = (lion) => {
    navigate(`/App/${lion.name}`, { state: lion }); // Pass the lion data as state
  };
  return (
    <>
      <S.ContentOuter>
        <S.Content>
          <S.Content_Top>
            <S.Content_Top_Map>
              <Location></Location>
            </S.Content_Top_Map>
          </S.Content_Top>
          <S.Content_Bottom>
            <S.Content_Bottom_Header>
              <PiForkKnife size={"30px"} />내 주변 맛집
            </S.Content_Bottom_Header>
            <S.Content_Slider>
              <S.Box>
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination]}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  autoplay={{ delay: 3000 }} // 자동 재생 설정 (3초마다)
                  speed={500} // 슬라이드 전환 속도 (밀리초 단위)
                  onSwiper={(swiper) => swiper}
                  onSlideChange={() => console.log("slide change")}
                >
                  {text.map((lion, idx) => (
                    <SwiperSlide key={idx}>
                      <S.Slide>
                        <S.Slidewrapper
                          key={idx}
                          onClick={() => handleSlideClick(lion)}
                        >
                          <S.Slideimage>
                            <img
                              src={`${lion.images[0].image}`}
                              alt={lion.name} // Don't forget to add alt attribute for accessibility
                            />
                          </S.Slideimage>
                          <S.Slideinfo>
                            <S.Sliderinfoheader>{lion.name}</S.Sliderinfoheader>
                            <S.Sliderinfocontent>
                              {lion.road_address}
                              <br />
                              {lion.operation_time}
                              <br />
                              평점: {lion.ratings}/5
                            </S.Sliderinfocontent>
                          </S.Slideinfo>
                        </S.Slidewrapper>
                        <S.Sliderow>
                          <img
                            className="scrap-black-image"
                            src={
                              scrapStates[lion.store_id]
                                ? Scrap_black
                                : Scrap_white
                            }
                            onClick={() => {
                              mainpagescrap(lion.store_id);
                              toggleScrap(lion.store_id);
                            }}
                          />
                        </S.Sliderow>
                      </S.Slide>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </S.Box>
            </S.Content_Slider>
          </S.Content_Bottom>
        </S.Content>
      </S.ContentOuter>
    </>
  );
}
