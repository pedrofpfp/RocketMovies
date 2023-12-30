import styled from "styled-components";

export const Container = styled.div`
display: grid;
height: 100vh;
grid-template-rows: 144px auto;
>header{

 width   :100% ;
 height: 144px;
 background-color: ${({theme}) => theme.COLORS.RED_LIGHT_TRANSPARENT};
 display: flex;
 padding-left: 144px;

 

}
img{
    border-radius: 50%;
    width: 186px;
    align-self: flex-start;
     margin-left: -235px;
     margin-top: 51px;
     position: relative;
     left: 50vw;
     
     
      
     
  
   
 }

`;
export const Formulario = styled.form`

width: 340px;
height: 336px;
justify-self: center;
margin-top:  120px;



.Senhas{
   margin: 16px 0 24px 0;
}
`;
