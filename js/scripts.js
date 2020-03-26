// IIFE wrap
(function() {
  var pokemonRepository = (function() {
    var repository = [];
    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    // returns an array of values being pushed by the 'add()' function
    function getAll() {
      return repository;
    }
    // pushes any values from 'loadList' function to the 'repository' array
    function add(item) {
      repository.push(item);
    }

    //fetch pokemon data from API and loop it in a json 'pokemon' object
    /*eslint no-undef: "error"*/
      return $.ajax(apiUrl, { dataType: 'json' })
        .then(function(item) {
          $.each(item.results, function(item) {
            var pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            // Adds the retrieved data to the Repository
            add(pokemon);
          });
        })
        .catch(function(e) {
          /* eslint-disable no-console */
          console.error(e);
          /* eslint-enable no-console */
        });
    }

    function loadDetails(item) {
      var url = item.detailsUrl;
      return $.ajax(url)
        .then(function(details) {
          // add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types.map(function(pokemon) {
            return pokemon.type.name;
          });
        })
        .catch(function(e) {
          /* eslint-disable no-console */
          console.error(e);
          /* eslint-enable no-console */
        });
    }
    // returning all functions
    return {
      add: add,
      getAll: getAll,
      loadList: loadList,
      loadDetails: loadDetails
    };
  })();

  var $pokemonList = ('.pokemon-list');

  function addListItem(pokemon) {
    var listItem = (
      '<button type="button" class="pokemon-list_item list-group-item list-group-item-action" data-toggle="modal" data-target="#pokemon-modal"></button>'
    );
    listItem.text(pokemon.name);
    $pokemonList.append(listItem);
    listItem.click(function() {
      showDetails(pokemon);
    });
  }

  //Modal display details about pokemon rom 'pokemon': img, height and type
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function() {
      // creates Modal
      var modal = ('.modal-body');
      var name = ('.modal-title').text(pokemon.name);
      var height = ('<p class="pokemon-height"></p>').text(
        'Height: ' + pokemon.height + ' m.'
      );
      var type = ('<p class="pokemon-type"></p>').text(
        'Type: ' + pokemon.types + '.'
      );
      var image = ('<img class="pokemon-picture">');
      image.attr('src', pokemon.imageUrl);

      if (modal.children().length) {
        modal.children().remove();
      }

      modal
        .append(image)
        .append(height)
        .append(type);
    });
  }

  pokemonRepository.loadList().then(function() {
    var pokemons = pokemonRepository.getAll();

    $.each(pokemons, function(index, pokemon) {
      addListItem(pokemon);
    });
  });
})(); //IIFE wrap
