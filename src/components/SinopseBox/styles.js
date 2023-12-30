import styled from "styled-components";


export const Container = styled.div`

height: 222px;
width: 100%;

background-color:${({theme})=>theme.COLORS.RED_LIGHT_TRANSPARENT};

margin-bottom: 24px;
border-radius:16px;
padding: 32px;
>h1{
font-size: 24px;
font-weight: bold;
}
#sinopseDiv{
    margin: 15px 0 ;
    height: 45px;
    text-align:justify;
    font-size: 16px;
    font-weight: normal;
    overflow: hidden;
}





`;