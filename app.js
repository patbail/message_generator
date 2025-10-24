// Category for name generation
const nameCategory = ['encampment', 'person', 'dungeon'];

// Objects storing the data for naming
const encampment = {
	caracteristic: ['Tiny', 'Small', 'Modest', 'Bustling', 'Large', 'Sprawling', 'Fortified', 'Hidden'],
	type: ['hamlet', 'village', 'town', 'city', 'stronghold', 'outpost', 'camp', 'settlement', 'refuge'],
	name: ['Thumsberg', 'Eldhollow', 'Ravenmoor', 'Stonewatch', 'Brimvale', 'Frostmere', 'Oakshade', 'Duskreach', 'Ironford', 'Windmere']
}

const person = {
	firsName: ['Alaric', 'Branwen', 'Cedric', 'Elowen', 'Gareth', 'Isolde', 'Kaelen', 'Liora', 'Thorne', 'Ysolde'],
	ladName: ['Darkmoor', 'Ironhart', 'Windrider', 'Stormborn', 'Emberfall', 'Ravenshade', 'Thistlekeep', 'Grimvale', 'Silverbranch', 'Dreadmere']
}
const dungeon = {
	type: ['Crypt', 'Cave', 'Grotto', 'Cellar', 'Dungeon', 'Tower', 'Sanctum', 'Labyrinth', 'Catacombs', 'Ruins'],
	Adjective: ['of the Forsaken', 'of the Verdant', 'of Eternal Flame', 'of the Divine', 'of Shadows', 'of the Whispering', 'of the Blighted', 'of the Lost', 'of the Hollow', 'of the Cursed'],
	theme: ['Light', 'Forest', 'Gods', 'Mountain', 'Ashen Vale', 'Moonspire', 'Thornreach', 'Ebonhold', 'Starfall', 'Frostpeak']
}

// Selecting a random Id from an array
const RandomIdFromArray = array => {
	return Math.floor(Math.random() * array.length);
}

// Select the category
const categorySelection = () => {
	return nameCategory[RandomIdFromArray(nameCategory)];
}

// Looping trough object properties
const objectLoop = object => {
	// let nameArray = [];
	let name = '';
	for (let key in object) {
		if (Array.isArray(object[key])) {
			name += object[key][RandomIdFromArray(object[key])] + ' ';
			// nameArray.push(object[key][RandomIdFromArray(object[key])]);
		}
	}
	name = name.trimEnd(' ');
	return name;
} 

console.log(objectLoop(person));

console.log(categorySelection());