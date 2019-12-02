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

function add(pokemon) {
  repository.push(pokemon);
}

function getAll() {
  return repository;
}

return { /*Return All Previous Function In Order To Be Available Outside Of IIFE */
  add: add,
  getAll: getAll
};

})();

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


pokemonRepository.add(absol);
pokemonRepository.add(luxray);
pokemonRepository.add(pikachu);
pokemonRepository.add(milotic);
pokemonRepository.add(eevee);

// use getAll function returned by IIFE in order to retrieve the repository array.
// forEach instead of for i-loop
pokemonRepository.getAll().forEach(function(currentPokemon){
document.write("<br>" + [currentPokemon.name +" (" + "height: "
+ currentPokemon.height +")" + "<br>"]);
 });
