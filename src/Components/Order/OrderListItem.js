import React from 'react';
import styled from 'styled-components';
import trashImage from '../../image/trash.svg';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunctions';


const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
`;

const ItemName = styled.span`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
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

const ItemToppings = styled.span`
    margin-left: 2px  ;
    text-align: right;
    font-size: 14px;
`;

export const OrderListItem = ({ order }) => (
    <>
        <OrderItemStyled>
            <ItemName>
                {order.name}
                <span>{order.topping.filter(item => item.checked).map((item, index) => 
                    <ItemToppings key={index}>
                    {item.name}
                    </ItemToppings>)}
                </span>
            </ItemName>
            <span>{order.count}</span>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <TrashButton/>
            
        </OrderItemStyled>
        
   </>
    
);