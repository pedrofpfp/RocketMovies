import styled from "styled-components";

export const Container = styled.div`
height:100vh;


`;


export const MovieSection= styled.div`
height: calc(100vh - 144px);
padding:  40px  110px  156px 110px;

>h1{
    font-size: 36px;
    font-weight: medium;
    display: inline;
    position: relative;
    top: 24px;
    margin-right: 19px;
}
>img{
    width: 140px;
    height: 20px;
    display: inline;
    position: relative;
    top: 24px;

}
.infos{
    
    position: relative;
    top: 30px;
    display: flex;
    align-items: center;
    gap: 8px;
    
    
    >img{

        width: 16px;
        height: 16px;
        border-radius:50%;
    }
}

.tags{


    position: relative;
    top:60px;
}
.text{
    width: 100%;
    height: clamp(15vh, 30vh, 40vh);
    
    position: relative;
    overflow: scroll ;
    top: 113px;
}
`;
