/*!
* Here comes all Javascript
* Pokedoki App
* Date: 2019-11-11
*/

var pokemonRepository = (function () {  //Start of IIFE
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //Function to add new Pokemon data
  function add(pokemon) {
    repository.push(pokemon);
  }

  //Function to pull all Pokemon data
  function getAll() {
    return repository;
  }

    //Function to add list for each pokemon object
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
    })
  }

  //Function to load pokemon list from API
  function loadList () {
    return fetch (apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.result.forEach (function(item) {
        var pokemon ={
          name:item.name,
          detailsUrl:item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  }

  function catchAll() { /* Function Used To Return Pokedex Object Array*/
  return repository;
  }

  //Function to show details of each Pokemon
    function showDetails(item) {
      pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
      alert('Height:' + ' ' + item.height + ' ' + 'Type: ' + ' ' + item.types);
      });
    }

  return { /*Return All Previous Function In Order To Be Available Outside Of IIFE */
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
    };

})();

//Creates list of Pokemon with Pokemon's name on the button
pokemonRepository.loadList().then(function() {
// Now the data is loaded!
pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
  });
});
