import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1100; /* 모달 아래에 오버레이를 배치하지만 다른 요소보다는 위에 배치됩니다 */
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StarContainer = styled.div`
    position: fixed;
    width: 70%;
    height: 60%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #273345;
`;

export const StarModalCloseBtn = styled.button`
    color: white;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const Star = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 150px;
`;

export const Star_Left = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding-right: 200px;
`;

export const Star_Title = styled.div`
    color: white;
    font-size: 20px;
    font-weight: bold;
    background-color: #60A1FF;
    border-radius: 15px;
    text-align: center;
    height: 100%;
    padding: 5px 0px 5px 0px;
    margin-bottom: 10px;
`;

export const Star_Left_Title = styled.div`
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 0px 0px 10px 0px;
`;

export const Star_Left_Image_Title = styled.div`
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 0px 0px 10px 0px;
`;

export const Star_Right = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-right: 300px;
`;

export const Star_Right_Title = styled.div`
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 0px 0px 10px 0px;
`;

export const Star_Right_Content = styled.div`
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 0px 0px 10px 0px;
`;

export const Star_Right_Content_Input = styled.input`
    color: black;
    font-size: 16px;
    width: 200px;
    height: 100px;
    border-style: none;
    font-family: 'Noto Sans KR';
    font-weight: Regular;
`;