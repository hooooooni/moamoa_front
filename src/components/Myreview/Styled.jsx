// styled.js (또는 해당 파일 이름)
import styled from 'styled-components';

export const ReviewEntireTitle = styled.div`
    font-size: 20px;
    padding-left: 30px;
`;

export const Review_Container = styled.div`
    display: flex;
    flex-wrap: wrap; /* 필요한 만큼의 줄로 분할 */
    gap: 20px; /* 리뷰 간 간격 조절 */
    max-height: 600px; /* 스크롤 높이 제한 설정 */
    overflow-y: auto; /* 세로 스크롤 적용 */
    width: 90%;
    justify-content: space-around;
    align-items: center;
    margin-left: 30px;
`;

export const Review_Item = styled.div`
    flex: 1 1 calc(25% - 20px); /* 각 리뷰 아이템의 너비 조절 */
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Review = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
    border-radius: 5px;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.1);
    margin: 10px 0px 10px 0px;
    padding: 20px;
`;

export const ReviewStoreName = styled.div`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;

export const ReviewRating = styled.div`
    font-size: 10px;
    padding-bottom: 5px;
`;

export const ReviewTitle = styled.div`
    font-size: 18px;
    b {
        font-weight: bold;
    }
`;

export const ReviewContent = styled.div`
    font-size: 12px;
    background-color: #D9E6FA;
    padding: 20px;
    border-radius: 10px;
    margin-top: 10px;
`;

export const ReviewImg = styled.img`
    width: 180px;
    height: 150px;
`;

export const Review_Delete_Button = styled.button`
    width: 90px;
    height: 30px;
    border-radius: 5px;
    font-weight: 600;
    color: white;
    background-color: #60a1ff;
    border: 1px solid transparent;
    margin-top: 10px;
`;