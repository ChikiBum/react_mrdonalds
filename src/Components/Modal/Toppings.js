import React from 'react';
import styled from 'styled-components';


const ToppingWrap = styled.div`
    max-width: 500px;
    margin: 0 auto;
    column-count: 2;
    column-gap: 55px;
`;

const ToppingLabel = styled.label`
    margin-right: 5px;
    display: block;
`;

const ToppingCheckbox = styled.input`
    margin-right: 5px;
`;

export const Toppings = ({ toppings, checkToppings }) => {
    return (
        <>
            <h3>ДОбавки</h3>
            <ToppingWrap>
                {toppings.map((item, i) => (
                    <ToppingLabel key={i}>
                    <ToppingCheckbox 
                        type='checkbox'
                        checked={item.checked}
                        onChange={() => checkToppings(i)}
                        />
                    {item.name}
                </ToppingLabel>
                ))}
            </ToppingWrap>
        </>
        
    )
};