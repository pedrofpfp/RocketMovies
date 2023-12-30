import styled from "styled-components";

export const Container = styled.div``;

export const NewMarker = styled.span`

padding: 5px 16px;
border-radius: 8px;
background-color: transparent;
color: #948F99;
font-size: 12px;
font-weight: normal;
margin-right: 8px;
width: 180px;
height: 30px;
display: flex;
align-self: center;
border: dashed 1px;
border-color: #948F99;
justify-content: space-between;
`;

export const NewMovie = styled.div`

padding:  40px  110px  156px 110px;
>h1{
    font-size: 36px;
    font-weight: medium;
    display: inline;
    position: relative;
    top: 24px;
    margin-right: 19px;
}
.texts{
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr 1fr;
    position: relative;
    top: 40px;
}
>p{
    position: relative;
    top:70px;
    color: ${({theme})=>theme.COLORS.GRAY_LIGHT}
}

.markers{
   position : relative;
   top:80px;
   height: 60px;
   background-color: black;
   border-radius: 8px;
   padding:16px;
   display: flex;
   align-items: center;
}
.buttons{
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr 1fr;
    position: relative;
    top: 100px;
}
`;


