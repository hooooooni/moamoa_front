import React, { useState, useEffect } from 'react';
import * as S from './styled';
import axios from 'axios';

export default function ReviewBox() {
    const [reviews, setReviews] = useState([]);

    const fetchReviews = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/user/my_reviews", {
                withCredentials: true,
            });
            setReviews(response.data);
        } catch (error) {
            console.log("Error fetching reviews:", error);
        }
    }

    const handleDeleteReview = async (reviewId) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/review/${reviewId}`, {
                withCredentials: true,
            });

            setReviews(reviews.filter(review => review.review_id !== reviewId));
        } catch (error) {
            console.log("Error deleting review:", error);
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
                            {review.images.length > 0 && (
                                <img
                                    src={`http://127.0.0.1:8000${review.images[0].image}`}
                                    width={"100px"}
                                    height={"100px"}
                                    alt={`Review Image`}
                                />
                            )}

                            <S.ReviewTitle>
                                <b>제목</b> {review.title}
                            </S.ReviewTitle>
                            <S.ReviewContent>
                                {review.content}
                            </S.ReviewContent>
                            <S.Review_Delete_Button onClick={() => handleDeleteReview(review.review_id)}>
                                삭제하기
                            </S.Review_Delete_Button>
                        </S.Review>
                    </S.Review_Item>
                ))}
            </S.Review_Container>
        </S.ReviewEntireTitle>
    );
}
