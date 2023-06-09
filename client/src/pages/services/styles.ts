import { Carousel } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 100px 0;

  
  gap: 75px;
`;

export const Title = styled.h1`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;

`;

export const CarouselContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
 
  z-index: 0;

  & .ant-carousel {
    width: 100%;
  }
`;

export const CarouselStyled = styled(Carousel)`
  width: 100%;
  height: auto;

  & .slick-track {
    height: 550px;
  }
  
  > .slick-active {
      
  }

  > .slick-dots li button {
    width: 24px;
    height: 24px;
    border-radius: 24px;
    background: linear-gradient(0deg, rgba(42,42,42,1) 0%, rgba(5,176,85,1) 100%);;
    margin: 35px 0 0 0;
    transition: 0.5s;
  }

  > .slick-dots li.slick-active button {
    background: linear-gradient(0deg, rgba(42,42,42,1) 0%, rgba(5,176,85,1) 100%);;
    margin: 35px 0 0 0;
    transition: 0.5s;
  }

  > .slick-dots {
    display: flex !important;
    flex-direction: row;
    gap: 25px;
   
  }

  > .slick-dots li{
    list-style: none;
    border: none;
    text-decoration: none;
  }

  > .slick-dots li.slick-active{
    margin: 0;
    padding: 0;
  }

  > .slick-dots-bottom{
    margin: 0;
    padding: 0;
  }

  > .slick-dots li button { 
    font-size: 0; 
    cursor: pointer;
    border: none;
  } 
`;
 