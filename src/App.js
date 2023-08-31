import React, { useState } from 'react';
import backcard from './assets/backcard.png';

// This component displays the monster's official id and it's name
function TopCard({ pokemon }) {
  return (
    <div className='top-card'> 
      <div className='id-field'>
        n°{pokemon.id} 
      </div>
      <div className='name-field'>
        {pokemon.name} 
      </div>
    </div>
  )
}

// This component displays the monster's type
// colortypes.filter( it[0] === types[0]).map( it => it[1])
function PokemonType({ pokemon, colortypes, setBgColor }) {
  const types = pokemon.type;
  let colors = [];

  // This function matches the first type of the monster to the colortypes list to return the right rgb value 
  let getColor = (types, colortypes, i) => {
    return colortypes.filter(it => it.type === types[i]).map(it => it.color);
  }
  
  // We store the result in an empty list
  colors = getColor(types, colortypes, 0);
  console.log(colors[0]);
  setBgColor(colors[0].substring(0, colors[0].length - 1) + ', 0.5')
  // Here we change the background if there's only one type
  if (types.length === 1) {
    return (
      <div className='pokemon-type-container'>
        <div className='pokemon-type' style={{ backgroundColor: colors[0]}}>{types[0].toUpperCase()}</div>
      </div>
    )
  } else if (types.length === 2) {
    
    // Otherwise we reuse the function to push the other type to the 'colors' list
    colors.push(getColor(types, colortypes, 1)) 

    return ( 
      <div className='pokemon-type-container'>
        <div className='pokemon-type' style={{ backgroundColor: colors[0]}}>{types[0].toUpperCase()}</div> 
        <div className='pokemon-type' style={{ backgroundColor: colors[1]}}>{types[1].toUpperCase()}</div> 
      </div>
    )
  } else {
    return null;
  }
  
}

// This component displays the picture of the monster

function Picture({ pokemon }) {
  return (
    <div className='picture-container'>
      <img className='picture' src={pokemon.url} alt='bulbasaur.png'/>
    </div>
  )
}

// This component displays the statistics of the monster 

function PokemonStats({ pokemon }) {
  return (
    <div className='pokemon-stats'>
      <div className='stats-container-left'>
        <div className='stat'>hp: {pokemon.hp}</div>
        <div className='stat'>attack: {pokemon.attack}</div>
        <div className='stat'>defense: {pokemon.defense}</div>
      </div>
      <div className='stats-container-right'>
      <div className='stat'>sp.atk: {pokemon.spatk}</div>
      <div className='stat'>sp.def: {pokemon.spdef}</div>
      <div className='stat'>speed: {pokemon.speed}</div>
      </div>
    </div>
  )
}

// This function creates a single card using all the components necessary to assemble them

function PokemonCard({ pokemon, colortypes }) {
const [bgColor, setBgColor] = useState('');

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-back">
          <div className='pokemon-card' style={{backgroundColor: bgColor} }>
            <TopCard pokemon={pokemon} />
            <PokemonType pokemon={pokemon} colortypes={colortypes} setBgColor={setBgColor} />
            <div className='space-between'>
              <Picture pokemon={pokemon}/>
              <PokemonStats pokemon={pokemon}/>
            </div>
          </div>
        </div>
        <div className='flip-card-front'>
          <img className='backcard' alt='pokemon back card' src={backcard}/>
        </div>
      </div>
    </div>
  )
}

// This function generate cards using the PokemonCard function using the POKEMONS list

function PokemonsGenerator({ pokemons, colortypes }) {
  
  // We use an empty list to map each element of the original through the PokemonCard function
  const pokemonsList = pokemons.map((pokemon) => (
    <PokemonCard key={pokemon.id} pokemon={pokemon} colortypes={colortypes} />
  ));
  
  

  return <div className='pokemon-generator'>{pokemonsList}</div>;
}

const POKEMONS = [
  {id: 1, name: "Bulbasaur", type: ["grass", "poison"], url: 'https://www.pokepedia.fr/images/e/ef/Bulbizarre-RFVF.png', hp: 45, attack: 49, defense: 49, spatk: 65, spdef: 65, speed: 45},
  {id: 2, name: "Ivysaur", type: ["grass", "poison"], url: 'https://www.pokepedia.fr/images/4/44/Herbizarre-RFVF.png', hp: 60, attack: 62, defense: 63, spatk: 80, spdef: 80, speed: 60},
  {id: 3, name: "Venusaur", type: ["grass", "poison"], url: 'https://www.pokepedia.fr/images/4/42/Florizarre-RFVF.png', hp: 80, attack: 82, defense: 83, spatk: 100, spdef: 100, speed: 80},
  {id: 4, name: "Charmander", type: ["fire"], url: 'https://www.pokepedia.fr/images/8/89/Salam%C3%A8che-RFVF.png', hp: 39, attack: 52, defense: 43, spatk: 60, spdef: 50, speed: 65},
  {id: 5, name: "Charmeleon", type: ["fire"], url: 'https://www.pokepedia.fr/images/6/64/Reptincel-RFVF.png', hp: 58, attack: 64, defense: 58, spatk: 80, spdef: 65, speed: 80},
  {id: 6, name: "Charizard", type: ["fire", "flying"], url: 'https://www.pokepedia.fr/images/1/17/Dracaufeu-RFVF.png', hp: 78, attack: 84, defense: 78, spatk: 109, spdef: 85, speed: 100},
  {id: 7, name: "Squirtle", type: ["water"], url: 'https://www.pokepedia.fr/images/c/cc/Carapuce-RFVF.png', hp: 44, attack: 48, defense: 65, spatk: 50, spdef: 64, speed: 43},
  {id: 8, name: "Wartortle", type: ["water"], url: 'https://www.pokepedia.fr/images/2/2a/Carabaffe-RFVF.png', hp: 59, attack: 63, defense: 80, spatk: 65, spdef: 80, speed: 58},
  {id: 9, name: "Blastoise", type: ["water"], url: 'https://www.pokepedia.fr/images/2/24/Tortank-RFVF.png', hp: 79, attack: 83, defense: 100, spatk: 85, spdef: 105, speed: 78},
  {id: 10, name: "Caterpie", type: ["bug"], url: 'https://www.pokepedia.fr/images/c/c7/Chenipan-RFVF.png', hp: 45, attack: 30, defense: 35, spatk: 20, spdef: 20, speed: 45},
  {id: 11, name: "Metapod", type: ["bug"], url: 'https://www.pokepedia.fr/images/6/6c/Chrysacier-RFVF.png', hp: 50, attack: 20, defense: 55, spatk: 25, spdef: 25, speed: 30},
  {id: 12, name: "Butterfree", type: ["bug", "flying"], url: 'https://www.pokepedia.fr/images/8/83/Papilusion-RFVF.png', hp: 60, attack: 45, defense: 50, spatk: 90, spdef: 80, speed: 70}
];

const COLORTYPES = [
  {type: "grass", color: "rgb(120, 200, 80)"},
  {type: "poison", color: "rgb(160, 64, 160)"},
  {type: "fire", color: "rgb(240, 128, 48)"},
  {type: "water", color: "rgb(104, 144, 240)"},
  {type: "bug", color: "rgb(168, 184, 32)"},
  {type: "flying", color: "rgb(168, 144, 240)"},
]

export default function App() {
   return <PokemonsGenerator pokemons={POKEMONS} colortypes={COLORTYPES} />
}

