/*!
 * Here comes all Javascript
 * Pokedoki App - Bootstrap and jQuery
 * Date: 2020-11-03
 */
// START of IIFE for Pokedex repository
var pokemonRepository = (function() {
  var repository = [];
  var apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  //Function to add new Pokemon data
  function add(item) {
    repository.push(item);
  }

  //Function to pull all Pokemon data
  function getAll() {
    return repository;
  }

  //Function to add list for each pokemon object
  function addListItem(pokemon) {
    var $pokemonList = $(".pokemon-list");
    var $listItem = $('<li class="buttonstyle"></li>');
    var $button = $(
      '<button class="list-button">' + pokemon.name + "</button>"
    );
    $pokemonList.append($listItem);
    $listItem.append($button);
    $button.on("click", function(event) {
      showDetails(pokemon);
    });
  }

  function add(name) {
    /*Add Additional Pokemon Attributes To Object Array*/
    repository.push(name);
  }

  function catchAll() {
    /* Function Used To Return Pokedex Object Array*/
    return repository;
  }

  //Function to load pokemon list from API
  function loadList() {
    return $.ajax(apiUrl, { dataType: "json" }).then(function(responseJSON) {
        return responseJSON;
      }).then(function(json) {
        json.results.forEach(function(item){
          var pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return $.ajax(url, {dataType: 'json'}).then(function(responseJSON) {
      return responseJSON;
    }).then(function(details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        // loop for each of the pokemon types
        item.types = Object.keys(details.types);
      })
      .catch(function(e) {
        console.error(e);
      })
  }

  //Function to show details of each Pokemon
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
      pokemonRepository.showModal(item);
    });
  }

  return {
    /*Return All Previous Function In Order To Be Available Outside Of IIFE */
    add: add,
    catchAll: catchAll,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();
// END of IIFE for Pokedex repository

//Creates list of Pokemon with Pokemon's name on the button
pokemonRepository.loadList().then(function() {
  var pokemons = pokemonRepository.getAll();
    $.each(pokemons, function(index, pokemon) {
    addListItem(pokemon);
  });
});
