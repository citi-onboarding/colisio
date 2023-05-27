import styled from 'styled-components';

export const Navbardiv = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 80px;
    left: 0px;
    top: 0px;
    background: #F5F5F5;
    border-bottom: 0.5px solid #545454;
`

export const Logo = styled.div `
    
`

export const Imagelink = styled.a `

`

export const Image = styled.img `
    width: 105px;
    height: 38px;
`

export const Sections = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Section = styled.a `
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    text-decoration: none;
    &:hover {
        color: #05B055;
        transition: color 0.5s;
    }
`

export const Contactdiv = styled.div `
    
`

export const Link = styled.a `
    text-decoration: none;
`

export const Button = styled.button `
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 32px;
    gap: 10px;
    border: 1px solid #05B055;
    color: #05B055;
    &:hover {
        color: #F5F5F5;
        background-color: #05B055;
        transition-duration: 300ms; 
    } 
`

export const Contact = styled.p `
    
`