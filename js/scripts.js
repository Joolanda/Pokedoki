/*!
* Here comes all Javascript
* Pokedoki App
* Date: 2019-11-11
*/

// This array will become the repository of Pokémon to display in myapplication
const repository = [];

// add several objects (Pokémons)to the array.
// Each Pokémon needs to have the same keys to avoid errors


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

repository.push(absol);
repository.push(luxray);
repository.push(pikachu);
repository.push(milotic);
repository.push(eevee);


//You have already filled repository and you just need to iterate over it like:
//for (var j = 0; j < pokemon.length; j++) {...}

//Next you need to check if the current height of the item is greater than certain value (could be a constant) then assign the special postfix to the string you want to write to the document.
