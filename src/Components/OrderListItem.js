import React from 'react';
import styled from 'styled-components';
import trashImage from '../image/trash.svg';

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin: 0 10px 0 20px;
    min-width: 65px;
    text-align: right;
`;

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent; 
    background-image: url(${trashImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cusrsor: pointer;
`;

export const OrderListItem = () => (
    <OrderItemStyled>
        <ItemName>JS Burger</ItemName>
        <span>2 </span>
        <ItemPrice>550 ГРН</ItemPrice>
        <TrashButton/>
    </OrderItemStyled>

);