import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
display: grid;
grid-template-columns:  auto 803px;
>img{
    width: 100%;
}
overflow-y: hidden;
>.loginSection{
    justify-self: center;
    margin-top: 100px ;
}
>.loginSection h1{
    color: ${({theme}) => theme.COLORS.RED_LIGHT};
    font-size: 48px;
    font-weight: bold;
}
>.loginSection p{
    font-size:14px;
    font-weight: normal;
    color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
}

`;
export const Formulario = styled.form`
>h2{
    margin-bottom:48px ;
    font-size:24px;
    font-weight: medium;
}
width: 340px;
height:343px;
justify-self: center;
margin-top:  48px;
display: flex;
flex-wrap: wrap;
>.voltar{
   margin: 0 auto;
   position: relative;
   bottom: -30px;
}
        
`;