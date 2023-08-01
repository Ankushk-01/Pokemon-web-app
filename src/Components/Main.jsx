import "./Style.css";
import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState } from "react";
const Main =()=>{
    const [pokeData,setPokeData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [url,setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    return(
        <>
        <div className="container">
            <div className="left-content">
            <Card/>
            <div className="btn-group">
                <button>Privious</button>
                <button>Next</button>
            </div>
            </div>
            <div className="right-content">
                <Pokeinfo></Pokeinfo>
            </div>
        </div>
        </>
    )
}

export default Main;