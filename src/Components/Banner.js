import React from 'react';
import styled from 'styled-components';
import bannerImg from '../image/banner.png'


const ImgBanner = styled.img`
    width: 100%;
    height: auto;
    `;

export const Banner = () => (
    <ImgBanner src={bannerImg} alt='bannerImg'/>
)