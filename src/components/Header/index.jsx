import { Container } from "./styles";
import { TextInput } from "../TextInput";
import { UserLogo } from "./UserLogo";
export function Header(){


    return(
        <Container>
         <h1>RocketMovies</h1>
         <TextInput place="Pesquisar pelo título"/>
        <UserLogo/>
        
        </Container>

    )
}