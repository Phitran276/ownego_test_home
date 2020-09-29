import styled from 'styled-components';

export const Card = styled.div`
padding: 20px;
border-radius: 5px;
box-shadow: 1px 1px 2px rgb(112, 112, 112);
background-color: #fff;
color: #1D2C53;
margin-bottom: 20px;
width: ${90 / 3}%;
margin-right: ${10 / 3}%;

@media screen and (max-width: 900px){
    width: ${90 / 2}%;
    margin-right: ${10 / 2}%;
}
@media screen and (max-width: 360px){
    width: 100%;
    margin-right: 0;
}
`;

export const Code = styled.p`
 font-size: 25px;
 font-weight: 300;
 margin: 0;
`;

export const Name = styled.p`
 font-size: 25px;
 font-weight: 500;
 margin: 0;
`;

export const Hr = styled.hr`
  height: 2px;
  background-color: #1D2C53;
`;

export const ToppingTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin: 0;
`;

export const Topping = styled.p`
  font-size: 18px;
  margin: 0;
`;

export const Price = styled.p`
font-size: 25px;
font-weight: 500;
margin: 0;
float: right;
margin: 0;
`;
