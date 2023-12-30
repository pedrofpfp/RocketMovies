import styled from "styled-components";


export const Container= styled.div`
width: 100%;
height: 116px;

border-bottom: 1px solid ;
border-color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 123px;


>h1{
    color: ${({theme}) => theme.COLORS.RED_LIGHT};
    font-size: 24px;
    font-weight: bold;
    margin: 42px 0px 42px 0px;
}

`;
