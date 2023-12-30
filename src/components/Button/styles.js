import styled from "styled-components";




export const Container = styled.button`
width: 100%;
padding: 13.5px 32px;
height: 48px;
background-color: ${({theme}) => theme.COLORS.RED_LIGHT};
color: ${({theme}) => theme.COLORS.GRAY_DARK_BUTTON};
border-radius: 8px;
font-size: 16px;
border: none;
font-weight: normal;
display: flex;
align-items: center;
justify-content: center;
`;