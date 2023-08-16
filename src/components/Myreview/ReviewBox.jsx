// ReviewBox.js (또는 해당 파일 이름)
import React, { useState, useEffect } from 'react';
import * as S from './styled';
import axios from 'axios';

export default function ReviewBox() {
    const [reviews, setReviews] = useState([]);

    const fetchReviews = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/review");
            setReviews(response.data);
        } catch (error) {
            console.log("Error fetching reviews:", error);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <S.ReviewEntireTitle>리뷰 수정 안내
            <S.Review_Container>
                {reviews.map((review, index) => (
                    <S.Review_Item key={index}>
                        <S.Review>
                            <S.ReviewStoreName>{review.store}</S.ReviewStoreName>
                            <S.ReviewRating>
                                평점 {review.rating}
                            </S.ReviewRating>
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
