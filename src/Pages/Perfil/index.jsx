import { Container, Formulario } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft, FiUser,FiMail ,FiLock} from "react-icons/fi";
import { Link } from "react-router-dom";
import {TextInputIcon} from "../../components/TextInputIcon";
import {Button} from "../../components/Button"

export function Perfil(){

return(
    <Container>
       
         <header>
            <img src="https://www.github.com/pedrofpfp.png" alt="" />
         
          <ButtonText icon={FiArrowLeft} title="Voltar"/>
          
         </header>
         <Formulario>
          <TextInputIcon placeholder="Nome" icon={FiUser}/>
          <TextInputIcon placeholder="Email" icon={FiMail}/>

          <div className="Senhas">
          <TextInputIcon placeholder="Senha Atual" icon={FiLock}/>
          <TextInputIcon placeholder="Nova Senha" icon={FiLock}/>
          </div>
          <Button title="Salvar" ></Button>
         </Formulario>

    </Container>
)

}