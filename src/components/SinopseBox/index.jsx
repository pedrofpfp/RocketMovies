import { Container } from "./styles";
import { Tag } from "../Tags";
import { Link } from "react-router-dom";



export function SinopseBox(){

return(

  <Container>
    <Link to="/MoviePrev" style={{"textDecoration":"none","color":"white"}}>
       <h1>Interstellar</h1></Link>
       <img src="/assets/stars.svg" alt="" />
       <div id="sinopseDiv">
       <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de </p>
       </div>
       <Tag title="Ficção Científica"/>
       <Tag title="Drama"/>
       <Tag title="Família"/>
  </Container>

)


}