import styled from 'styled-components';

export const Board = styled.div`
background-color: #F0F0F0;
color: #1D2C53;
margin: 0;
padding: 25px;
margin-left: 250px;
min-height: 100vh;
@media screen and (max-width: 900px){
    margin-left: 200px;
}   
@media screen and (max-width: 768px){
    margin-left: 0;
}
`;

export const Title = styled.div`
    font-weight: 500;
    font-size: 35px;
    text-align: center;
    letter-spacing: 3px;
`;

export const ListItem = styled.div`
   display: flex;
   flex-wrap: wrap;
`;


