import styled from "styled-components";


export const Container= styled.div`
width: 100%;
border-radius: 10px;

background-color: ${({theme}) => theme.COLORS.GRAY_DARK};
border: none;

overflow-y: hidden;
resize: none;
margin-bottom: 8px;
>input{
    
    height: 56px;
    width: 80%;
    padding: 19px 12px;
    color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_LIGHT} ;
    }
}
> svg {
    margin-left: 16px;
  }
`;
