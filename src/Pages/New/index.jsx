import { Container,Formulario } from "./styles";   
import { FiLock,FiMail,FiUser ,FiArrowLeft} from "react-icons/fi";
import { Link } from "react-router-dom";
import {TextInputIcon} from "../../components/TextInputIcon";
import {Button} from "../../components/Button"; 
import { ButtonText } from "../../components/ButtonText";


export function New(){

return(


    <Container>
    <div className="loginSection">
    <h1>
        RockectMovies
    </h1>
    <p>Aplicação para acompanhar tudo que assistir.</p>
    <Formulario>
    <h2>Crie sua conta</h2>
    <TextInputIcon placeholder="Nome" icon={FiUser}/>
    <TextInputIcon placeholder="Email" icon={FiMail}/>
    <TextInputIcon placeholder="Senha" icon={FiLock}/>
    <Button title="Cadastrar" ></Button>
    <div className="voltar">
        <Link to="/">
    <ButtonText icon={FiArrowLeft} title="Voltar para o login"/>
    </Link>
    </div>
    </Formulario>

    </div>
    <img src="../../../assets/Group 15.png" alt="" />

    </Container>
)

}