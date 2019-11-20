/*!
* Here comes all Javascript
* Pokedoki App
* Date: 2019-11-11
*/

// Firstly you define the repo array
const repository = [];

// add several objects (Pokémons)to the array.
// Each Pokémon needs to have the same keys to avoid errors

//Secondly you define each pokemon:
var absol = {
  name:'Absol',
  height: "1.2",
  type: 'dark',
};

var luxray = {
  name:'Luxray',
  height: "1.4",
  type: 'electric',
};

var pikachu = {
  name:'Pikachu',
  height: "0.4",
  type: 'electric',
};

var milotic = {
  name: 'Milotic',
  height: "6.2",
  type: 'water',
};

var eevee = {
  name:'Eevee',
  height: "0.3",
  type: 'normal',
};

//Next you push each defined pokemon into the repo 
repository.push(absol);
//and so on for each pokemon
repository.push(luxray);
repository.push(pikachu);
repository.push(milotic);
repository.push(eevee);
