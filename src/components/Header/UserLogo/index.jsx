import { Container,Profile } from "./styles";
import { Link } from "react-router-dom";

export function UserLogo(){


    return(
        <Container>
            
        <p>Pedro de França</p>
        <a>sair</a>
        <Profile to="/Perfil">
        <img src="https://www.github.com/pedrofpfp.png" alt="" />
        </Profile>
        
        </Container>

    )
}