import { Button } from "../components/Button.jsx";
import { FooterPage } from "../components/FooterPage.jsx";
import { Title } from "../components/Title.jsx";
import "./Home.css"


export default function Home() {

    return (
      <body>
        
          <header>
            <Title nome={"Pokémon XD"}/>
          </header>
          
          <main>
  
            <section>
                <Button style={{backgroundColor:"#C04141"}} nome={"Adicionar Jogador"}/>
                <Button style={{backgroundColor:"#C04141"}} nome={"Carregar Jogador"}/>
            </section>
  
          </main>
  
            <footer>
              <FooterPage/>
            </footer>
  
      </body>
    )
  }