import styled from 'styled-components';

export const HomeContainerdiv = styled.div`
    width: 1440px;
    height: 2328px;
    background: #F5F5F5;
    margin: #292929;
    margin-left: 0;
    margin-right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `;

export const HomeH1 = styled.h1`
    font: 600 64px'Open Sans', sans-serif; //open sans não funcionando??
    font-style: Bold;
    color: #000000;
    text-align: center;
    margin-top: 0px;
    margin-left: 279px;
    margin-right: 279px;
    padding: 0px;
    padding-top: 65px;
    padding-bottom: 39px;
    `;

export const HomeP = styled.p`
    font-size: 24px;
    color: #626262;
    text-align: center;
    padding-bottom: 39px;
    margin-left: 240px;
    margin-right: 240px;
    `;

export const HomeImg = styled.img`
    width: 1080px;
    height: 616px;
    border-top-right-radius: 7%;
    border-top-left-radius: 7%;
    `;

//Constante para botão
export const ButtonH = styled.button`
    width: 228px;
    height: 40px;
    font: 100 24px sans-serif; 
    font-style: normal;
    line-height: 24px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 69px;
    padding: 6px 32px;
    gap: 10px;
    background-color: #05B055;
    border: none;
    color: #F5F5F5;
    &:hover {
        color: #F5F5F5;
        background-color: #12F87D;
        transition-duration: 400ms; 
    }
`;

export const ComeceAgora = styled.div`  
    `

export const Contact = styled.div`
    width: 1440px;
    height: 1164px;
    background: #12F87D;
    margin: #292929;
    margin-left: 0;
    margin-right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `;

export const AnchorH = styled.div