//This central file will contain anything to be referenced from a large variety of locations,
//it prevents cyclical dependencies.

//currentLevel initialized to null, to be changed over time in other files.
let currentLevel = null;

function changeLevel(newLevel) {
    currentLevel = newLevel;
}

export { currentLevel, changeLevel };