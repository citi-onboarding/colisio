import styled from 'styled-components';
import { CellPhoneImg } from "../../assets";

export const Contatodiv = styled.div `
    width: 100%;
    background-color: green;
    background-image: url(${ CellPhoneImg });
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
`

export const Titlediv = styled.div `
    padding-top: 50px;
    text-align: center;
`

export const Title = styled.p `
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    color: #FFFFFF;
`

export const Textdiv = styled.div `
    padding-top: 104px;
    padding-left: 100px;
    justify-content: left;
`

export const Text = styled.p `
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;   
    font-size: 64px;
    color: #FEFEFE;
`

export const Buttondiv = styled.div `
    padding-top: 80px;
    padding-left: 100px;
    padding-bottom: 154px;
`

export const Link = styled.a `
    text-decoration: none;
`

export const Button = styled.button `
    padding: 6px 32px;
    gap: 10px;
    background: #05B055;
    border: 1px solid #05B055;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &:hover{
        transition: 0.5s;
        filter: brightness(1.5);
    }
`

export const Buttontext = styled.p `
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #F5F5F5
`