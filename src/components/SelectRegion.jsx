import { useEffect } from "react";
import { useState } from "react";



export function Select({style}){
    const [regions,setRegions]=useState([]);
    const [size,setSize]=useState(0);
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/region/')
        .then(response=> response.json())
        .then(resulte =>{
            const list=resulte.results.map(item=>{
                let region=item.name;
                region=region[0].toUpperCase()+region.slice(1);
                return region;
            })
            setRegions([...list]);         
        });
    },[])
    return(
        <div className="sel-region">
        {regions.length != 0 && <select id="regions"  defaultValue={"0"} style={style}>
                <option value="0" key={0} disabled >Região</option>
                {regions.map((item,index)=><option className="region-name" key={index+1} value={item}>{item}</option>)}              
            </select>}
        </div>
    )
}