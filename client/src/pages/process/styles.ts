import styled from 'styled-components';
import {Vector2} from '../../assets';
import { Rectangle101 } from '../../assets';

export const Processdiv = styled.div`
    background: #F5F5F5;
`
export const Titlediv = styled.div`
    padding-top: 50px;
    text-align: center;
    flex-direction: row;
`
export const Title = styled.div`
    font-family: 'Raleway';
    font-weight: 500;
    font-size: 40px;
`

export const Bodydiv = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-evenly;
    height: 695px;
    width: 100%;
    margin-top: 60px;
    flex-wrap: wrap;
`

export const Textdiv = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Title1 = styled.p`
    color: #808080;
    font-family: 'Raleway';
    font-weight: 500;
    display: flex;
    flex-direction: column;
    padding-top: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const Text = styled.p`
   flex-direction: column;
   color: #808080;

`
export const Blocks = styled.div`
    background-image: url(${Vector2});
    background-position: center; 
    background-repeat: no-repeat; 
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-evenly;
    height: 695px;
    width: 100%;
    flex-wrap: wrap;
    border: none;
    gap: 60px;
`

export const Block = styled.div`
    background-image: url(${Rectangle101});
    height: 209px;
    width: 315px;
    display: flex;
    flex-direction: column;
    border: none;
    margin-top: 90px;
    gap: 60px;
`



