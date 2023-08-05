import "./Style.css";
import React, { useEffect } from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState } from "react";
const Main =()=>{
    const [pokeData,setPokeData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [url,setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl,setNextUrl] = useState("");
    const [priviousUrl,setPriviousUrl] = useState("");
    async function pokeFun(){
        setLoading(true);
        const res = await axios.get(url);
        // console.log(res.data.results);
        setNextUrl(res.data.next);
        setPriviousUrl(res.data.previous);
        // console.log(res.data.next);
        // console.log(res.data.previous);
        getPokemon(res.data.results);
        // console.log("pokedata"+res.data.results.data);
        setLoading(false);
    }
    async function getPokemon(res){
        res.map(async(item)=>{
            const result = await axios.get(item.url);
            console.log(result.data);
            setPokeData(state=>{
                state = [...state,result.data]
                return state;
            })
        })
    }
    useEffect(()=>{
        pokeFun();
    },[url])
    // console.log(loading);
    return(
        <>
        <div className="container">
            <div className="left-content">
            <Card pokemon={pokeData} pageloading = {loading}/>
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