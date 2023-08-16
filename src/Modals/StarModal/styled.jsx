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
    width: 50%;
    height: 50%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #273345;
    overflow: hidden;
    border-radius: 8px;
    
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
    position: absolute;
    justify-content: center;

    align-items: center;
`;

export const Star_Left = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding-right: 100px;
`;

export const Star_Title = styled.div`
    color: white;
    font-size: 20px;
    font-weight: bold;
    background-color: #60A1FF;
    border-radius: 15px;
    text-align: center;
    height: 100%;
    padding: 15px 0px 15px 0px;
    margin-bottom: 10px;
`;

export const Star_Left_Title = styled.div`
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 20px 0px 10px 0px;
`;

export const Star_Left_Images = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Star_Left_Image_Title = styled.div`
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 40px 0px 10px 0px;
`;

export const Star_Left_Image_1 = styled.img`
    color: white;
    width: 100px;
    height: 100px;
    background-size: cover;
`;

export const Star_Left_Image_Container = styled.div`
    color: white;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    cursor: pointer;
    margin: 10px 10px 0px 0px;
    border-radius: 5px;
`;

export const Star_Left_Image_Placeholder = styled.div`
    color: #888888;
    font-size: 12px;
    text-align: center;
`;

export const Star_Right = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 20px;
    font-weight: bold;
`;

export const Star_Right_Title = styled.div`
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 0px 0px 10px 0px;
`;

export const Star_Right_Title_Input = styled.input`
    color: black;
    font-size: 16px;
    width: 300px;
    height: 30px;
    border-style: none;
    font-family: 'Noto Sans KR';
    font-weight: Regular;
`;

export const Star_Right_Content = styled.div`
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 40px 0px 10px 0px;
`;

export const Star_Right_Content_Input = styled.input`
    color: black;
    font-size: 16px;
    width: 300px;
    height: 100px;
    border-style: none;
    font-family: 'Noto Sans KR';
    font-weight: Regular;
`;

export const Submit_Button = styled.button`
    width: 150px;
    height: 50px;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 600;
    color: white;
    background-color: #60a1ff;
    border: 1px solid transparent;
    margin-top: 20px;
`;