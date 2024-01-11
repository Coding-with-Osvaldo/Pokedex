import "./SelectGender.css"
import { useState } from "react";

export function SelectGender(){
    const [gender,setGender]=useState("Masculino");

    function handleChangeGender (event){
        setGender(event.target.value);
    }

    return(
        
        <div className="poke-gender">
            <label htmlFor="">Gênero:</label>

            <select name="generos" onClick={handleChangeGender} id="Generos">
                <option className="gender" value="Masculino">Masculino</option>
                <option className="gender" value="Feminino">Feminino</option>
            </select>
            <img src={pegaImg(gender)} alt="" />
        </div>

    )
}

const pegaImg = (gender)=>{
    if(gender === "Masculino"){
    return "../../ashe-icon.png"
    }
    return "../../misty-icon.jpg"
}


