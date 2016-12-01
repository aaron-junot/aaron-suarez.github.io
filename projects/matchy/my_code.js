var animal = {};
animal.species = "dog";
animal["name"] = "Pat";
animal.noises = [];
console.log(animal);

var noises = [];
noises[0] = "bark!";
noises.push("ruff.");
noises.unshift("meow");
noises[noises.length] = "moo";

console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

animal["noises"] = noises;
animal.noises.push("woof!");
console.log(animal);

var animals = [];
animals.push(animal);
console.log(animals);

var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};

animals.push(duck);
console.log(animals);

var goat = {
    species: 'goat',
    name: 'Elliot',
    noises: ['AAAH!', 'Baa']
};

var falcon = {
    species: 'falcon',
    name: 'Aaron',
    noises: ['Squawk!', 'SHRIEK!']
};

animals.push(goat, falcon);
console.log(animals);

// Friends is an array because arrays are essentially lists.
// The friends list will be stored in the array called 'friends'
var friends = [];

function randomFriend(animals) {
    return animals[Math.floor(Math.random() * animals.length)];
}

friends.push(randomFriend(animals).name);

console.log(friends);

animals[animals.length - 2].friends = friends;

console.log(animals[animals.length - 2]);

function search(animalName) {
    for (var i = 0; i < animals.length; i++){
        if (animalName === animals[i].name) return animals[i];
    }
    return null;
}

function edit(animalName, obj){
    for(let i = 0; i < animals.length; i++){
        if(animalName === animals[i].name) {
            animals[i] = obj;
            return;
        }
    }
}

function remove(animalName) {
    for(let i = 0; i < animals.length; i++){
        if(animalName === animals[i].name) {
            animals.splice(i, 1);
        }
    }
}

function create(obj) {
    if (obj.name && obj.name.length > 0) {
        if(obj.species && obj.species.length > 0) {
            let flag = false;
            for(let i = 0; i > animals.length; i++){
                if (obj.name === animals[i].name) {
                    flag = true;
                }
            }
            if (flag === false) animals.push(obj);
        }
    }
}