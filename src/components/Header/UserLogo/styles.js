import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container= styled.div`
width: 198px;
height: 68px;
margin-left: 64px;
display: grid;
grid-template-columns:  1fr 9px 64px;
grid-template-rows: 1fr 1fr;


>p{
    grid-row: 1;
  
     font-size: 14px;
     font-weight: bold;
     height:auto;
     align-self: end;
     text-align:end;
} 
>a{
    grid-row: 2;
    
font-size: 14px;
font-weight: regular;
color:${({theme}) => theme.COLORS.GRAY_LIGHT};
text-align:end;
}


`;

export const Profile= styled(Link)`
>img{
    grid-column: 3;
border-radius: 50%;
height: 64px ;
width: 64px;
position: relative;
top: -30%;
left: 10px;

}
`;

