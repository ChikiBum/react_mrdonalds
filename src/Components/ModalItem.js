import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 40px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;

const Modal = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    width: 600px;
    height: 600px;
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
`;

const BannerInfo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: auto;
    margin-bottom: 20px;
`;

const BannerButton = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 250px;
    height: 65px;
    background: #299B01;
    margin-bottom: 40px;
    font-size: 21px;
    color: white;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {

    function closeModal(e){
        if (e.target.id === 'overlay'){
            setOpenItem(null);
        }
    }
    
    if (!openItem) return null;
    return(
    <Overlay id="overlay" onClick={closeModal}>
        <Modal>
            <Banner img={openItem.img}/>
            <BannerInfo>
                <h3>{openItem.name}</h3>
                <h3>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'UAH', currencyDisplay: 'code'})}</h3>
            </BannerInfo>
            <BannerButton>Добавить</BannerButton>
        </Modal>
    </Overlay>)
};