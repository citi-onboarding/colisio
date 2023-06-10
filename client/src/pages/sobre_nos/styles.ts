import styled from "styled-components";

export const SobreNosContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    background: #F5F5F5;
    flex-direction: column;
    gap: 60px;
    padding-top: 150px;
    padding-bottom: 150px;

`

export const Conteudo = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    background: #F5F5F5;
    align-content: center;
    flex-direction: row;
    justify-items: center;

    gap: 60px;
`

export const Foto = styled.image`
    align-self: center;
    overflow: hidden;
    perspective: 1px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

`
export const Titulo = styled.div`
    display: flex;
    align-self: center;
    width: 300px;
    height: 47px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 47px;
    color: #000000;
`
export const Parte_Escrita = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
`

export const Slogan = styled.div`
    width: 388px;
    height: 86px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;

    color: #000000;

`

export const Caminho = styled.a`
    color: #05B055;
`

export const Texto = styled.div`
    width: 361px;
    height: 355px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;

    color: #000000;
`


export const Logo = styled.image`

    display: flex;
    flex-direction: row;
    align-self: center;
    padding-left: 10%;
    

    -webkit-filter: drop-shadow(0px 0px 20px rgba(0 0 0 / 25%)); 
    filter: drop-shadow(0px 0px 5px rgba(0 0 0 / 25%));
`
