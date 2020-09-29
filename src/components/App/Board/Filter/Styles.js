import styled from 'styled-components';

export const Filter = styled.div`
margin:20px;
margin-right: 3%;
margin-left: 0;
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width: 360px){
    display: block;
    text-align: center;
}
`;

export const FilterCheck = styled.div`
    background-color: #fff;
    padding: 20px;
    margin: 0px 20px 20px 0;
    @media screen and (max-width: 500px){
        margin: 20px 0;
    }
`;


export const TitleCheck = styled.p`
    font-size: 20px;
    font-weight: 500;
`;

export const ListCheckbox = styled.div`
    display: flex;
    flex-wrap: wrap;
`;