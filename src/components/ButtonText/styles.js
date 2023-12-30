import styled from "styled-components";

export const Container =  styled.button`

color: ${({theme}) => theme.COLORS.RED_LIGHT};
background: none;
border: none;
font-size: 16;
font-weight: normal;
width: 100%;
display: flex;
align-items: center;
gap: 8px;

`;