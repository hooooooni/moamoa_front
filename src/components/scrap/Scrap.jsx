import * as S from './styled';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Scrap() {

    const [scrap, setScrap] = useState([]);

    const fetchScrap = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/user/scraps", {
                withCredentials: true,
            });
            setScrap(response.data);
        } catch (error) {
            console.log("Error fetching scrap:", error);
        }
    }

    useEffect(() => {
        fetchScrap();
    }, []);

    return (
        <>
            <S.Scrap_Container>
                {scrap.map((scrapItem, index) => (
                    <S.Scrap_Item key={index}>
                        <S.Scrap>
                            <img
                                src={`http://127.0.0.1:8000${scrapItem.images.image}`}
                                width={"200px"}
                                height={"200px"}
                                alt={`Scrap Image`}
                                style={{ borderRadius: '10px' }}
                            />
                            <S.Scrap_Title>{scrapItem.name}</S.Scrap_Title>
                            <S.Scrap_Address>{scrapItem.road_address}</S.Scrap_Address>
                            <S.Scrap_Time>{scrapItem.operation_time}</S.Scrap_Time>
                            <S.Scrap_Rating>평점 {scrapItem.ratings}</S.Scrap_Rating>
                            <S.Scrap_Rating>전화 {scrapItem.store_num}</S.Scrap_Rating>
                        </S.Scrap>
                    </S.Scrap_Item>
                ))}
            </S.Scrap_Container>
        </>
    )
}
