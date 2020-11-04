import React from 'react';
import styled from 'styled-components';

const ChoiceWrap = styled.div`
    max-width: 500px;
    margin: 0 auto;
    column-count: 2;
    column-gap: 55px;
`;

const ChoiceRadio = styled.input`
    margin-right: 5px;
`;

const ChoiceLabel = styled.label`
    margin-right: 5px;
    display: block;
`;

export function Choices({ openItem, choice, changeChoices }) {
    return(
        <>
            <h3>Выбирайте: </h3>
            <ChoiceWrap>
                {openItem.choices.map((item, i) => (
                    <ChoiceLabel key={i}>
                        <ChoiceRadio 
                            type="radio"
                            name="choices"
                            checked={choice === item}
                            value={item}
                            onChange={changeChoices}
                        />
                    {item}
                </ChoiceLabel>
                ))}
            </ChoiceWrap>
        </>
    )

};