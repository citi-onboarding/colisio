import { Carousel } from "antd";
import styled from "styled-components";
import { Arrow } from "../../assets";

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

  position: relative;
 
  z-index: 0;

  & .ant-carousel {
    width: 100%;
    height: auto;
  }
`;

export const CarouselStyled = styled(Carousel)`
  width: 100%;
  height: auto;

  & .slick-track {
    height: 550px;
  }

  > .slick-dots li button {
    width: 24px;
    height: 24px;
    border-radius: 24px;
    background: linear-gradient(0deg, rgba(42,42,42,1) 0%, rgba(5,176,85,1) 100%);;
    margin: 0;
    transition: 0.5s;
  }

  > .slick-dots li.slick-active button {
    background: linear-gradient(0deg, rgba(42,42,42,1) 0%, rgba(5,176,85,1) 100%);;
    margin: 0;
    padding: 0;
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

  & .slick-slide {
    opacity: 0.5;
  }

  & .slick-active {
    opacity: 1;
    margin: 0;
    padding: 0;
  }

  > .slick-prev {
    width: 50px;
    height: 80px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 40%;
    left: 13%;

    transform: rotate(180deg);

    background: url(${Arrow});
    background-repeat: no-repeat;
    background-size: 50px 80px;
    background-position: center;
    cursor: pointer;
    z-index: 15;

    :hover {
      background: url(${Arrow});
      background-repeat: no-repeat;
      background-size: 50px 80px;
      background-position: center;
    }

    :focus {
      background: url(${Arrow});
      background-repeat: no-repeat;
      background-size: 50px 80px;
      background-position: center;
    }
  }

  > .slick-next {
    width: 50px;
    height: 80px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 40%;
    right: 19%;

    background: url(${Arrow});
    background-repeat: no-repeat;
    background-size: 50px 80px;
    background-position: center;
    cursor: pointer;
    z-index: 15;

    :hover {
      background: url(${Arrow});
      background-repeat: no-repeat;
      background-size: 50px 80px;
      background-position: center;
    }

    :focus {
      background: url(${Arrow});
      background-repeat: no-repeat;
      background-size: 50px 80px;
      background-position: center;
    }
  }
`;