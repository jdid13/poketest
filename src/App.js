import React, {useState} from 'react';

// function ProductCategoryRow({ category }) {
//   return (
//     <tr>
//       <th colSpan="2">
//         {category}
//       </th>
//     </tr>
//   )
// }

// function ProductRow({ product }) {
//   const name = product.stocked ? product.name :
//   <span style={{ color: 'red' }}>
//     {product.name}
//   </span>

//   return (
//     <tr>
//       <td>{name}</td>
//       <td>{product.price}</td>
//     </tr>
//   )
// }

// function ProductTable({ products, filterText, inStockOnly }) {
//   const rows = [];
//   let lastCategory = null;

//   products.forEach((product) => {
//     if (
//       product.name.toLowerCase().indexOf(
//         filterText.toLowerCase()
//       ) === -1
//     ) { 
//       return;
//     }

//     if (inStockOnly && !product.stocked) {
//       return;
//     }


//     if (product.category !== lastCategory) {
//       rows.push(
//         <ProductCategoryRow
//           category={product.category}
//           key={product.category} />
//       );
//     }
//     rows.push(
//       <ProductRow
//         product={product}
//         key={product.name} />
//     );
//     lastCategory = product.category
//   });

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Price</th>
//         </tr>
//       </thead>
//       <tbody>{rows}</tbody>
//     </table>
//   );
// }

// function SearchBar( { filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
//   return (
//     <form>
//       <input type="text" value={filterText} placeholder="Search..." onChange={(e) => onFilterTextChange(e.target.value)} />
//       <label>
//         <input type="checkbox"  checked={inStockOnly}  onChange={(e) => onInStockOnlyChange(e.target.checked)} />
//         {' '}
//         Only show products in stock
//       </label>
//     </form>
//   );
// }


// function FilterableProductTable({ products }) {
//   const [ filterText, setFilterText ] = useState('fruit');
//   const [ inStockOnly, setInStockOnly ] = useState(false);

//   return (
//     <div>
//       <SearchBar 
//         filterText = {filterText}
//         inStockOnly = {inStockOnly}
//         onFilterTextChange={setFilterText}
//         onInStockOnlyChange={setInStockOnly} />
//       <ProductTable 
//       products={products}
//       filterText = {filterText}
//       inStockOnly = {inStockOnly} />
//     </div>
//   );
// }

function TopCard({ pokemons }) {
  const row = [];

  pokemons.array.forEach(pokemon => {
    row.push(
      
    )
  });

  return (
    <div>
      n°{pokemons[0].id} | {pokemons[0].name} | {pokemons[0].type} | {pokemons[0].hp}
    </div>
  )
}

function PokemonCard({ pokemons }) {
  return (
    <div>
      <TopCard pokemons={pokemons} />

    </div>
  )
}

const POKEMONS = [
  {id: 1, name: "Bulbasaur", type: ["grass", "poison"], hp: 45, attack: 49, defense: 49, spatk: 65, spdef: 65, speed: 45},
  {id: 2, name: "Ivysaur", type: ["grass", "poison"], hp: 60, attack: 62, defense: 63, spatk: 80, spdef: 80, speed: 60},
  {id: 3, name: "Venusaur", type: ["grass", "poison"], hp: 80, attack: 82, defense: 83, spatk: 100, spdef: 100, speed: 80},
  {id: 4, name: "Charmander", type: ["fire"], hp: 39, attack: 52, defense: 43, spatk: 60, spdef: 50, speed: 65},
  {id: 5, name: "Charmeleon", type: ["fire"], hp: 58, attack: 64, defense: 58, spatk: 80, spdef: 65, speed: 80},
  {id: 6, name: "Charizard", type: ["fire", "flying"], hp: 78, attack: 84, defense: 78, spatk: 109, spdef: 85, speed: 100},
  {id: 7, name: "Squirtle", type: ["water"], hp: 44, attack: 48, defense: 65, spatk: 50, spdef: 64, speed: 43},
  {id: 8, name: "Wartortle", type: ["water"], hp: 59, attack: 63, defense: 80, spatk: 65, spdef: 80, speed: 58},
  {id: 9, name: "Blastoise", type: ["water"], hp: 79, attack: 83, defense: 100, spatk: 85, spdef: 105, speed: 78},
  {id: 10, name: "Caterpie", type: ["bug"], hp: 45, attack: 30, defense: 35, spatk: 20, spdef: 20, speed: 45},
  {id: 11, name: "Metapod", type: ["bug"], hp: 50, attack: 20, defense: 55, spatk: 25, spdef: 25, speed: 30},
  {id: 12, name: "Butterfree", type: ["bug", "flying"], hp: 60, attack: 45, defense: 50, spatk: 90, spdef: 80, speed: 70}
];

export default function App() {
   return <PokemonCard pokemons={POKEMONS} /> //<FilterableProductTable products={PRODUCTS} />;
}

