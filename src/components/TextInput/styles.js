import styled from "styled-components";


export const Container= styled.textarea`
width: 630px;
height: 56px;
color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
border-radius: 10px;
background-color: ${({theme}) => theme.COLORS.GRAY_DARK};
border: none;
padding: 19px 24px;
overflow-y: hidden;
resize: none;
margin-left: 64px;
`;
