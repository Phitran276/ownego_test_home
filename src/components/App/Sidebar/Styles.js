import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Sidebar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 250px;
    padding: 50px 0;
    background-color: #1D2C53;
    color: #fff;
    text-align: center;
    font-size: 25px;
    @media screen and (max-width: 900px){
        width: 200px;
    }    
@media screen and (max-width: 768px){
    position: relative;
    height: fit-content;
    width: 100%;
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 0;
}
`;

export const NavLinkItem = styled(NavLink).attrs(() => ({
    activeStyle: { color:'#fff', backgroundColor:'#7986cb' }
  }))`
     display: block;
     position: relative;
     left: 0;
     margin: 20px 0 10px;
     transition: left 0.1s;
     color: #bdbdbd;
     margin: 0;
     padding: 10px;
     @media screen and (max-width: 768px){
        width: 25%;
     }
     @media screen and (max-width: 500px){
         width: 50%;
     }
`;