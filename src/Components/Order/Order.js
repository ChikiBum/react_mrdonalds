import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, formatCurrency, projection } from '../Functions/secondaryFunctions';

const OrderStyles = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0;
    background: #fff;
    width: 380px;
    height: calc(100% - 80px);
    box-shadow: 13px 4px 15px rgba(0, 0, 0, .45);
    padding: 20px;
`;

const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const Total = styled.ul`
    display: flex;
    margin: 0 35px 30px;
    & span:first-child{
        flex-grow: 1;
    }
`;

const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

const EmptyList = styled.p`
    text-align: center;
`;

const rulesData = { 
    itemName: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
        arr => arr.length ? arr : 'no topping'],
    choice: ['choice', item => item ? item : 'no choices']
}


export const Order = ({ orders, setOrders, setOpenItem, authentification, logIn, firebaseDatabase }) =>{
    const dataBase = firebaseDatabase();

    const sendOrder = () => {
        const newOrder = orders.map(projection(rulesData));
        dataBase.ref('orders').push().set({
            nameClient: authentification.displayName,
            email: authentification.email,
            order: newOrder
        });
        setOrders([]);
    };

    const deleteItem = index => {
        const newOrders = orders.filter((item, i) => index !== i);
        newOrders.splice(index, 1);
        setOrders(newOrders);
    };

    const total = orders.reduce((result, order) => 
        totalPriceItems(order) + result, 0); 

    const totalCounter = orders.reduce((result, order) => 
        order.count + result, 0); 


    return (
        <OrderStyles>
            <OrderTitle>Ваш заказ:</OrderTitle>
            <OrderContent>
               {orders.length ? 
               <OrderList>
                   {orders.map((order, index) => <OrderListItem 
                        key={index}
                        order={order}
                        deleteItem={deleteItem}
                        index={index}
                        setOpenItem={setOpenItem}
                    />)}
                </OrderList> :
                <EmptyList>Список заказов пуст</EmptyList>}
            </OrderContent>
            <Total>
                <span>Итого</span>
                <span>{totalCounter}</span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <ButtonCheckout onClick={() => {
                if (authentification){
                    sendOrder();
                } else {
                    logIn();
                }
            }}>Оформить</ButtonCheckout>
        </OrderStyles>
    )
};