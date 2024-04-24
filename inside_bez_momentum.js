function getRandomInteger(max) {
    return Math.floor(Math.random() * max);
}

let entries = lib().entries();
let numberOfEntries = entries.length;
let selection =
    getRandomInteger(numberOfEntries);
let e = entries[selection];
// Put code to show this entry here

e.show()
