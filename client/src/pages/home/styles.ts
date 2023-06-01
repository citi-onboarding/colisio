import styled from 'styled-components';

export const HomeContainerdiv = styled.div`
    width: 100%;
    height: auto;
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
    font-family:'Raleway'; 
    font-weight: 700; //pegando um único weight para o HomeP e HomeH1
    font-size: 64px;
    color: #000000;
    text-align: center;
    margin-top: 0px;
    margin-left: 279px;
    margin-right: 279px;
    padding: 0px;
    padding-top: 65px;
    padding-bottom: 39px;
    line-height: 75px;
    `;

export const HomeP = styled.p`
    font-family: 'Raleway';
    width: 961px;
    height: 105px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400; //pegando um único weight para o HomeP e HomeH1
    font-size: 24px;
    line-height: 38px;
    text-align: center;
    color: #626262;
    padding-bottom: 39px;
    margin-left: 240px;
    margin-right: 240px;
    
    `;

export const HomeImg = styled.img`
    width: 1080px;
    height: 616px;
    display: flex;
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

export const Contato = styled.div`
    `;

export const Link = styled.a`
    text-decoration: none;
`
export const ButtonH = styled.div`
    
`