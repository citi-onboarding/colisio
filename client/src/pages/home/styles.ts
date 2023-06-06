import styled from 'styled-components';

export const HomeContainerdiv = styled.div`
    width: 100%;
    height: auto;
    background: #F5F5F5;
    margin-left: 0;
    margin-right: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    gap: 3em;
    `;

export const HomeH1 = styled.h1`
    width: 68%;
    font-family:'Raleway'; 
    font-weight: 700;
    font-size: 64px;
    color: #000000;
    `;

export const HomeP = styled.p`
    width: 70%;
    font-family: 'Raleway';
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400; 
    font-size: 24px;
    line-height: 38px;
    color: #626262;  
    `;

export const HomeImg = styled.img`
    width: 1080px;
    max-width: 80%;
    height: 616px;
    `;

//Constante para botão
export const Button = styled.button`
    width: 228px;
    height: 40px;
    font: 100 24px 'Open Sans'; 
    font-style: normal;
    line-height: 24px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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

export const Contato = styled.div`
`;

export const Link = styled.a`
    text-decoration: none;
`;

export const ButtonH = styled.div`
    
`;