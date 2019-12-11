/*!
* Here comes all Javascript
* Pokedoki App
* Date: 2019-11-11
*/

// wrap repository array in an IIFE to avoid accidentally accessing the global state.
// create a new pokemonRepository variable
var pokemonRepository = (function () {
  var repository = [
    {
      name:"Absol",
      height: 1.2,
      type: "dark"
    },
    {
      name:"Luxray",
      height: 1.4,
      type: "electric"
    },
    {
      name:"Pikachu",
      height: 0.4,
      type: "electric"
    },
    {
      name: "Milotic",
      height: 6.2,
      type: "water"
    },
    {
      name:"Eevee",
      height: 0.3,
      type: "normal"
    }

  ];
// This array will become the repository of Pokémon to display in myapplication

/*function add(pokemon) {
  repository.push(pokemon);
}
*/
function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "type" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("add an object");
    }
  }

function addListItem(pokemon) {

  var $listItem = document.createElement("li");
  var $button = document.createElement("button");
  $listItem.classList.add("buttonstyle");
  $pokemonList.appendChild($listItem); // append the 'li' list items along with all child elements into the 'ul' list
  $button.innerText = pokemon.name;
  $listItem.appendChild($button); // append the 'button' into the 'li' list items

}

function getAll() {
  return repository;
}

return { /*Return All Previous Function In Order To Be Available Outside Of IIFE */
  add: add,
  getAll: getAll,
  addListItem: addListItem
};

})();



//create a variable above the forEach loop block, then assign it the ul element
var pokemonRepository = document.querySelector(".pokemon-list")

pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
 });
