/*!
* Here comes all Javascript
* Pokedoki App
* Date: 2019-11-11
*/
// START of IIFE for Pokedex repository
var pokemonRepository = (function () {
  "use strict";
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  var $modalContainer = $('#modal-container');
  var $pokemonList = $('ul');

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
          var $pokemonList = $('.pokemon-list');
          var $listItem = $("<li class="list-group-item"></li>");
          var $button = $('<button class="list-button">' + pokemon.name + '</button>');

          $(pokemonList).append($listItem);
          $(listItem).append($button);
          $button.on("click", function() {
            showDetails(pokemon);
            });
          }

          function add(name) { /*Add Additional Pokemon Attributes To Object Array*/
            repository.push(name);
            }

          function catchAll() { /* Function Used To Return Pokedex Object Array*/
            return repository;
            }

          //Function to load pokemon list from API
          function loadList() {
            return $.ajax(apiUrl), {dataType: 'json'}).then(function (item) {
              $.each(item.results, function(index, item) {
                var pokemon = {
                  name: item.name,
                  detailsUrl: item.url
                };
                add(pokemon);
              });
            }).catch(function(e) {
                console.error(e);
            });
          }

          function loadDetails(item) {
            var url = item.detailsUrl;
            return $.ajax(url, {dataType: 'json'}).then(function(details) {
            // Now we add the details to the item
              item.imageUrl = details.sprites.front_default;
              item.height = details.height;
              item.types = Object.keys(details.types);
            }).catch(function (e) {
                console.error(e);
            });
          }

          // Function to show a modal with title and text

          function showModal(item) {
            //clear all existing modal content
            $modalContainer.html(' ', class="is-visible");

            var $modal = $('<div class="modal"></div>');

            // add the new modal content
            var $closeButtonElement = $('<button="modal-close">Close</button>');
            $closeButtonElement.on('click', function(hideModal);

            var $modalTitle = $('h1');
            $modalTitle.html(item.name class='modal-title');

            var $modalHeight = $('p');
            $modalHeight.html('Height: ' + item.height class='modal-details') ;

            var $modalType = $('p');
            $modalType.html('Type: ' + item.types class='modal-details');

            //Pokemon display image in modal
            var $imageElement = $('img');
            $imageElement.html(item.imageUrl class='modal-img');

            $modal.append($closeButtonElement);
            $modal.append($imageElement);
            $modal.append($modalTitle);
            $modal.append($modalHeight);
            $modal.append($modalType);
            $modalContainer.append($modal);

          }

          function hideModal() {
            var $modalContainer = $('#modal-container' removeClass('is-visible'));
          }

          var $modalContainer.on('click', function(showModal) => {
            ('Modal title', 'This is the modal content!');
          });

          //Function to show details of each Pokemon
          function showDetails(item) {
            pokemonRepository.loadDetails(item).then(function () {
              pokemonRepository.showModal(item);
            });
          }

        return { /*Return All Previous Function In Order To Be Available Outside Of IIFE */
          add: add,
          catchAll: catchAll,
          getAll: getAll,
          addListItem: addListItem,
          loadList: loadList,
          loadDetails: loadDetails,
          showModal: showModal,
          hideModal: hideModal
        };
})();
// END of IIFE for Pokedex repository

//Creates list of Pokemon with Pokemon's name on the button
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
