import { Container } from "./styles";


export function TextInput({place,style}){


    return(
        <Container placeholder={place} style={style}/>
    )
}