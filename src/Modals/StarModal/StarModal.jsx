import React, { useEffect, useRef } from "react";
import * as S from "./styled"
import { AiOutlineClose } from "react-icons/ai";
import StarRating from "../../components/StarRating/StarRating";



export default function StarModal({ setStarmodalOpen }) {
    const modalRef = useRef();

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setStarmodalOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <S.Overlay>
            <S.StarContainer ref={modalRef}>
                <S.StarModalCloseBtn onClick={() => setStarmodalOpen(false)}>
                    <AiOutlineClose />
                </S.StarModalCloseBtn>
                <S.Star>
                    <S.Star_Left>
                        <S.Star_Title>평가하기</S.Star_Title>
                        <S.Star_Left_Title>평점</S.Star_Left_Title>
                        <StarRating />
                        <S.Star_Left_Image_Title>사진 첨부</S.Star_Left_Image_Title>
                    </S.Star_Left>
                    <S.Star_Right>
                        <S.Star_Right_Title>제목</S.Star_Right_Title>
                        <S.Star_Right_Content>평가 내용</S.Star_Right_Content>
                        <S.Star_Right_Content_Input></S.Star_Right_Content_Input>
                    </S.Star_Right>
                </S.Star>
            </S.StarContainer>
        </S.Overlay>
    );
}
