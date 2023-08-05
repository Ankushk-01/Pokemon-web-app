import React from "react";
const Card = ({ pokemon, pageloading }) => {
  //   console.log(pokemon);
  // console.log("loading"+pageloading);
  {
    pageloading ? (
      <h1>Loading ....</h1>
    ) : (
      pokemon.map((item) => {
        console.log("item : " + item);
        return (
          <>
            <div className="card" key={item.id}>
              <h2>{item.id}</h2>
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
                alt=""
              />
              <h2>Charmander</h2>
            </div>
          </>
        );
      })
    );
  }
};

export default Card;
    // return(
    //     <>
    //     <div className="card">
    //         <h2>1</h2>
    //         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt=""/>
    //         <h2>Charmander</h2>

    //     </div>
    //     </>
    // )
