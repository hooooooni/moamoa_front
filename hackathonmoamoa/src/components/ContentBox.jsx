import React from 'react'
import styled from 'styled-components';
import { Content, ContentOuter, Content_Bottom, Content_Bottom_Header, Content_Slider, Content_Top, Content_Top_Map } from './Styled';
import { PiForkKnife } from "react-icons/pi";

export default function ContentBox() {




    return (
        <>
            <ContentOuter>
                <Content>
                    <Content_Top>
                        <Content_Top_Map>Map</Content_Top_Map>

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