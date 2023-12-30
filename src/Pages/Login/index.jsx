import { Container,Formulario } from "./styles";   
import { FiLock,FiMail } from "react-icons/fi";

import {TextInputIcon} from "../../components/TextInputIcon";
import {Button} from "../../components/Button"; 

export function Login(){

return(


    <Container>
    <div className="loginSection">
    <h1>
        RockectMovies
    </h1>
    <p>Aplicação para acompanhar tudo que assistir.</p>
    <Formulario>
    <h2>Faça seu login</h2>
    <TextInputIcon placeholder="Email" icon={FiMail}/>
    <TextInputIcon placeholder="Senha" icon={FiLock}/>
    <Button title="Entrar" ></Button>
    </Formulario>
    </div>
    <img src="../../../assets/Group 15.png" alt="" />

    </Container>
)

}