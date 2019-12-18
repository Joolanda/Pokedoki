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

  function addListItem(pokemon) {
    var $pokemonList = document.querySelector("ul");
    var $listItem = document.createElement("li");
    var $button = document.createElement("button");
    $pokemonList.appendChild($listItem);
    $listItem.appendChild($button);
    $button.innerText = pokemon.name;
    $button.classList.add("list-button");
    $listItem.classList.add("buttonstyle");
    $button.addEventListener("click", function(event) {
    showDetails(pokemon);
    });
  }

  //Function to show details of each Pokemon
    function showDetails(pokemon) {
       console.log(pokemon.name + pokemon.height + pokemon.type);
       alert(pokemon.name + pokemon.height + pokemon.type);
     }

  return { /*Return All Previous Function In Order To Be Available Outside Of IIFE */
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
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


pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});
