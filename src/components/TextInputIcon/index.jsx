import { Container } from "./styles";


export function TextInputIcon({place,icon: Icon,...rest}){


    return(
        <Container placeholder={place}  > 
       {Icon && <Icon size={20} />}
      <input {...rest} />
        </Container>
    )
}