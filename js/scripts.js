/*!
* Here comes all Javascript
* Pokedoki App
* Date: 2019-11-11
*/

// wrap repository array in an IIFE to avoid accidentally accessing the global state.
// create a new pokemonRepository variable
var pokemonRepository = (function () {
  var repository = [];
// This array will become the repository of Pokémon to display in myapplication
const pokemon = [];

function add(pokemon) {
  repository.push(pokemon);
}

function getAll() {
  return repository;
}


var absol = {
  name:'Absol',
  height: 1.2,
  type: 'dark',
};

var luxray = {
  name:'Luxray',
  height: 1.4,
  type: 'electric',
};

var pikachu = {
  name:'Pikachu',
  height: 0.4,
  type: 'electric',
};

var milotic = {
  name: 'Milotic',
  height: 6.2,
  type: 'water',
};

var eevee = {
  name:'Eevee',
  height: 0.3,
  type: 'normal',
};

pokemon.push(absol);
pokemon.push(luxray);
pokemon.push(pikachu);
pokemon.push(milotic);
pokemon.push(eevee);

return {
  add: add,
  getAll: getAll
};

// forEach instead of for i-loop
 pokemon.forEach(function(currentPokemon){
document.write("<br>" + [currentPokemon.name +" (" + "height: "
+ currentPokemon.height +")" + "<br>"]);
 });


})();
