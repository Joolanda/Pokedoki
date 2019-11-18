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
   1.2,
   1.4,
   0.4,
   6.2,
   0.3,
 ];

for (var j = 0; j < pokemonHeight.length; j++) {
var e = pokemonHeight;
 var result = e;

 if (pokemonHeight[j] > e[j]) {
  result = 'big';
} else {
  result = 'little';
}
}

 repository.push(pokemonName, pokemonType, pokemonHeight);

 for (var i = 0; i < pokemonName.length; i++) {
   document.write(pokemonName[i]+" "+"(height: " +
   pokemonHeight[i]+")" + " " + result + "<br>");
 }
