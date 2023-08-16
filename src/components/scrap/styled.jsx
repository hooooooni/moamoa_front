import styled from 'styled-components';

export const Scrap_Container = styled.div`
    display: flex;
    flex-wrap: wrap; /* 필요한 만큼의 줄로 분할 */
    gap: 20px; /* 리뷰 간 간격 조절 */
    max-height: 600px; /* 스크롤 높이 제한 설정 */
    overflow-y: auto; /* 세로 스크롤 적용 */
    width: 90%;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
`;

export const Scrap_Item = styled.div`
    flex: 1 1 calc(25% - 20px); /* 각 리뷰 아이템의 너비 조절 */
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Scrap = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    justify-content: center;
    width: 280px;
    height: 400px;
    border-radius: 15px;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.1);
    margin: 10px 0px 10px 0px;
    padding: 20px;
`;

export const Scrap_Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    padding: 10px 0px 5px 0px;
    text-align: center;
`;

export const Scrap_Address = styled.div`
    font-size: 12px;
    padding-bottom: 8px;
    text-align: center;
`;

export const Scrap_Time = styled.div`
    font-size: 12px;
    padding-bottom: 8px;
    text-align: center;
`;

export const Scrap_Rating = styled.div`
    font-size: 12px;
    padding-bottom: 8px;
    text-align: center;
`;