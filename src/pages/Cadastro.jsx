import { Select } from "../components/SelectRegion.jsx";
import { Title } from "../components/Title.jsx";
import { InputName } from "../components/InputName.jsx";
import { SelectGender } from "../components/SelectGender.jsx";
import { Button } from "../components/Button.jsx";
import { FooterPage } from "../components/FooterPage.jsx";
import "./Cadastro.css";
export function Cadastro(){
    return(    

        <body>
                
            <header>
                <Title nome={"Adicionar Jogador"}/>
            </header>

            <div className="selects">

                <InputName style={{backgroundColor:"#C04141"}}/>
                <SelectGender/>
                <Select style={{backgroundColor:"#C04141"}}/>
                <Button style={{backgroundColor:"#16273F", width:350}} nome={"Adicionar"}/>
            

            </div>

            <footer>
                <FooterPage/>
            </footer>

        </body>
    )
}