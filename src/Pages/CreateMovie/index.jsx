import { Container, NewMovie,NewMarker } from "./styles";
import { Link } from 'react-router-dom';

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft, FiPlus} from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { TextInput } from "../../components/TextInput";
import { Tag } from "../../components/Tags";
import { Button } from "../../components/Button";

export function CreateMovie(){

return(

<Container>
<Header></Header>
<NewMovie>

<Link to="/">
<ButtonText title="Voltar"   icon={FiArrowLeft}/>
</Link>  



        <h1>Novo filme</h1>
        <div className="texts">
        <TextInput place="Título" style={{"width" : "100%","margin-left" : "0" }}/>
        <TextInput place="Sua nota (de 0 a 5)" style={{"width" : "100%", "margin-left" : "0" }}/>
        <TextInput place="Observações" style={{"width" : "100%","height" : "100%","margin-left" : "0", "grid-column":"1/3" }}/>
       
        </div>
        <p>Marcadores</p>
        <div className="markers">
    <Tag title="React" icon={IoClose} style={{"width":"90px", "display":"flex"}}/>
    <NewMarker>
    Novo marcador
  <FiPlus size={20}/>
    </NewMarker>
        </div>
        <div className="buttons">

 <Button title="Excluir filme" style={{"background":"black", "color":"#FF859B"}}/>
 <Button title="Salvar alterações"/>
        </div>
        </NewMovie>
        
</Container>

)

}