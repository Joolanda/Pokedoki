/*!
 * Here comes all Javascript
 * Pokedoki App - Bootstrap and jQuery
 * Date: 2020-11-03
 */
// START of IIFE for Pokedex repository
(function(){
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

  function add(item) {
    /*Add Additional Pokemon Attributes To Object Array*/
    repository.push(item);
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

  return {
    /*Return All Previous Function In Order To Be Available Outside Of IIFE */
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();
// END of IIFE for Pokedex repository

    var $pokemonList = $(".pokemon-list");
//Function to add list for each pokemon object
  function addListItem(pokemon) {
    var listItem = $('<button type="button" class="pokemon-list_item list-group-item list-group-item-action" data-toggle="modal" data-target="#pokemon-modal"></button>');
    listItem.text(pokemon.name);
    $pokemonList.append(listItem);
    listItem.click(function(){
      showDetails(pokemon);
    });
  }
// Modal to display pokemon's name, image and details
function showDetails(pokemon){
    pokemonRepository.loadDetails(pokemon).then(function(){
        //create modal
        var modal = $('.modal-body');
        var name = $('.modal-title').text(pokemon.name);
        var height = $('<p class"pokemon-height"></p>').text('Height: ' + pokemon.height + ' m.');
        var image = $('<img class="pokemon-picture">');
        image.attr('src', pokemon.imageUrl);
        
        if(modal.children().length){
            modal.children().remove();
        }    
        modal.append(image)
            .append(height)
            .append(type);
    });   
}

//Creates list of Pokemon with Pokemon's name on the button
pokemonRepository.loadList().then(function() {
  var pokemons = pokemonRepository.getAll();
    $.each(pokemons, function(index, pokemon) {
    addListItem(pokemon);
  });
});    
})();// End of IIFE wrap
