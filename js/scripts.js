/*!
 * Here comes all Javascript
 * Pokedoki App
 * Date: 2019-11-11
 */

 // This array will become the repository of Pokémon to display in myapplication
var repository = [];

 // array of pokemon names
 var pokemonName = [
   'Absol',
   'Luxray',
   'Pikachu',
   'Milotic',
   'Eevee',
 ];

 // array of pokemon types, use array of strings
 var pokemonType = [
   'water',
   'electric',
   'dark',
   'normal'
 ];

 // array of pokemon heights, use array of strings
 var pokemonHeight = [
   "3'11\"",
   "4'07\"",
   "1'04\"",
   "20'04\"",
   "1'00\"",
 ];

 repository.push(pokemonName, pokemonType, pokemonHeight);

 for (var i = 0; i < pokemonName.length; i++) {
   document.write(pokemonName[i] + "<br>");
 }

repository.push(pokemonName, pokemonType, pokemonHeight);

// defining the pokemons without external input
var absol = {
  pokemonName: 'Absol',
  pokemonHeight: "3'11\"",
  pokemonType: 'dark',
};

var luxray = {
  pokemonName:'Luxray',
  pokemonHeight: "4'07\"",
  pokemonType: 'electric',
};

var pikachu = {
  pokemonName:'Pikachu',
  pokemonHeight: "1'04\"",
  pokemonType: 'electric',
};

var milotic = {
  pokemonName: 'Milotic',
  pokemonHeight: "20'04\"",
  pokemonType: 'water',
};

var eevee = {
  pokemonName:'Eevee',
  pokemonHeight: "1'00\"",
  pokemonType: 'normal',
};
