// ReviewBox.js (또는 해당 파일 이름)
import React, { useState, useEffect } from 'react';
import * as S from './styled';
import axios from 'axios';

export default function ReviewBox() {
    const [reviews, setReviews] = useState([]);

    const fetchReviews = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/user/my_reviews", // 요청 URL 변경
                {
                    withCredentials: true, // withCredentials 옵션 설정
                }
            );
            setReviews(response.data);
        } catch (error) {
            console.log("Error fetching reviews:", error);
        }
    }

    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <S.ReviewEntireTitle>리뷰 수정 안내
            <S.Review_Container>
                {reviews.map((review, index) => (
                    <S.Review_Item key={index}>
                        <S.Review>
                            <S.ReviewStoreName>{review.storename}</S.ReviewStoreName>
                            <S.ReviewRating>
                                평점 {review.rating}
                            </S.ReviewRating>
                            {review.images.length > 0 ? (
                                <img
                                    src={`http://127.0.0.1:8000${review.images[0].image}`}
                                    width={"100px"}
                                    height={"100px"}
                                    alt={`Review Image`}
                                />
                            ) : (
                                <p>No image available</p>
                            )}


                            <S.ReviewTitle>
                                <b>제목</b> {review.title}
                            </S.ReviewTitle>
                            <S.ReviewContent>
                                {review.content}
                            </S.ReviewContent>
                        </S.Review>
                    </S.Review_Item>
                ))}
            </S.Review_Container>
        </S.ReviewEntireTitle>
    );
}
