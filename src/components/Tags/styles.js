import styled from "styled-components";

export const Container  = styled.span`

padding: 5px 16px;
border-radius: 8px;
background-color: ${({theme})=> theme.COLORS.TAGS_COLOR};
color: #E5E5E5;
font-size: 12px;
font-weight: normal;
margin-right: 8px;
width: 121px;
height: 30px;
display: inline-flexbox;
align-self: center;
justify-content: space-between;

`;