/*!
* Here comes all Javascript
* Pokedoki App
* Date: 2019-11-11
*/

// This array will become the repository of Pokémon to display in myapplication
const pokemon = [];
// add several objects (Pokémons)to the array.
// Each Pokémon needs to have the same keys to avoid errors

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

pokemon.push(absol);
pokemon.push(luxray);
pokemon.push(pikachu);
pokemon.push(milotic);
pokemon.push(eevee);


//var biggest = " Wow,that\'s big!"
for (var i = 0; i < pokemon.length; i++){

  var biggest = pokemon[i].height;
  var result;
  if (biggest <= 5) {
  result = "\ ";
  } else {
  result = " Wow,that\'s big!";
  }

document.write("<br>" + pokemon[i].name  +" (" + "height: " +pokemon[i].height+")" + result  +  "<br>");
// printing repository[i]’s other details
  // ...
};
