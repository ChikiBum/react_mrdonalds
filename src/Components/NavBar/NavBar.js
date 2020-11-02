import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signinImg from '../../image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
    `;

const Logo = styled.div`
    display: flex;
    align-items: center;
    `;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
    `;

const ImgLogo = styled.img`
    width: 50px;
    `;

const Login = styled.button`
    width: 60px;
    height: 60px;
    background-color: transparent;
    color: white;
    border-radius: 12px;
    `;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>MrDonald's</H1>
        </Logo>
        <Login><img src={signinImg} alt="SignLogo"/><p>Войти</p></Login>
    </NavBarStyled>
);