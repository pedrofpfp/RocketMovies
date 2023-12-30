import { Header } from "../../components/Header";
import { AddMoviesHeader,MasterContainer,SinopsesContainer } from "./styles";
import { Button } from "../../components/Button";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { SinopseBox } from "../../components/SinopseBox";

export function Home(){


    return(
        <MasterContainer>
        <Header/>
        <AddMoviesHeader>
            <h1>Meus Filmes</h1>
            <Link to="/CreateMovie">
            <Button title="Adicionar filme" icon={FiPlus} style={{"width":"207px"}}/>
            </Link>
        </AddMoviesHeader>

        <SinopsesContainer>
            
        <SinopseBox/>
        <SinopseBox/> 
        <SinopseBox/>
        <SinopseBox/>
        <SinopseBox/>
        <SinopseBox/> 
        <SinopseBox/>
        <SinopseBox/>
              
        </SinopsesContainer>
        
        </MasterContainer>
        
    )
}