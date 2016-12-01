function objectValues(obj) {
    return Object.values(obj);
}

function keysToString(obj) {
    return Object.keys(obj).join(" ");
}

function valuesToString(obj) {
    var myArr = [];
    for (var prop in obj) {
        if (typeof obj[prop] === 'string'){
            myArr.push(obj[prop]);
        }
    }
    return myArr.join(" ");
}

function arrayOrObject(arg) {
    if (Array.isArray(arg)) return 'array';
    if (typeof arg === 'object') return 'object';
}

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeAllWords(string) {
    var arr = string.split(" ");
    for (var i = 0; i < arr.length; i++){
        arr[i] = capitalizeWord(arr[i]);
    }
    return arr.join(" ");
}

function welcomeMessage(obj) {
    return "Welcome " + capitalizeWord(obj.name) + "!";
}

function profileInfo(obj) {
    return capitalizeWord(obj.name) + " is a " + capitalizeWord(obj.species);
}

function maybeNoises(obj) {
    return obj.noises && (obj.noises.length > 0) ? obj.noises.join(" ") : "there are no noises";
}

function hasWord(stringOfWords, word) {
    return stringOfWords.includes(word) ? true : false;
}

function addFriend(name, obj) {
    obj.friends.push(name);
    return obj;
}

function isFriend(name, obj) {
    if (obj.friends) return obj.friends.includes(name);
    return false;
}

function nonFriends(name, people) {
    var notFriends = [];
    for (var i = 0; i < people.length; i++) {
        if (isFriend(name, people[i]) !== true && people[i].name !== name)
            notFriends.push(people[i].name);
    }
    return notFriends;
}

function updateObject(obj, key, value) {
    obj[key] = value;
    return obj;
}

function removeProperties(obj, strings) {
    for (var i = 0; i < strings.length; i++) {
        if (Object.keys(obj).includes(strings[i])){
            delete obj[strings[i]];
        }
    }
    return obj;
}

function dedup(arr) {
    var deduped = [];
    for(var i = 0; i < arr.length; i++) {
        if (deduped.includes(arr[i]) === false){
            deduped.push(arr[i]);
        }
    }
    return deduped;
}