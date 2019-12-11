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

//create a variable above the forEach loop block, then assign it the ul element
var pokemonRepository = document.querySelector(".pokemon-list")

pokemonRepository.getAll().forEach(function(currentPokemon){// create an Li element that contains a button for each pokemon,making sure to create a variable to hold each element of the two
var $listItem = document.createElement("li");
// append the 'li' list items along with all child elements into the 'ul' list
$pokemonList.appendChild($listItem);

var $button = document.createElement("button");
//  append the button to the list item as its child.
$listItem.appendChild($button);
// set innertext of the button to be the Pokemon's name, remember that forEach returns a pokemon in each iteration
$button.innerText = pokemon.name;
$button.classList.add("list-button");
$listItem.classList.add("buttonstyle");

 });
