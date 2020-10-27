import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import { Banner } from './Banner';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    
`;

const Section = styled.section`
  padding: 30px;
`;

export const Menu = () => (
    <MenuStyled>
        <Banner/>
        <Section>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger}/>
        </Section>
        <Section>
            <h2>Закуски \ Напитки</h2>
            <ListItem itemList={dbMenu.other} />
        </Section> 
    </MenuStyled>
)