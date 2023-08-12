import React from 'react'
import styled from 'styled-components';
import { Content, ContentOuter, Content_Bottom, Content_Bottom_Header, Content_Slider, Content_Top, Content_Top_Map, Content_Top_Scrap, Content_Top_Scrap_Body, Content_Top_Scrap_Header } from './Styled';
import { PiForkKnife } from "react-icons/pi";

export default function ContentBox() {




    return (
        <>
            <ContentOuter>
                <Content>
                    <Content_Top>
                        <Content_Top_Map>Map</Content_Top_Map>
                        <Content_Top_Scrap>
                            <Content_Top_Scrap_Header>
                                스크랩
                            </Content_Top_Scrap_Header>
                            <Content_Top_Scrap_Body>
                                내가 스크랩한거
                            </Content_Top_Scrap_Body>
                        </Content_Top_Scrap>
                    </Content_Top>
                    <Content_Bottom>
                        <Content_Bottom_Header>
                            <PiForkKnife size={"30px"}/>내 주변 맛집
                        </Content_Bottom_Header>
                        <Content_Slider/>
                    </Content_Bottom>
                </Content>
            </ContentOuter>
        </>

    )
}