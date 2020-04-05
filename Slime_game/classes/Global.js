//This central file will contain anything to be referenced from a large variety of locations,
//it prevents cyclical dependencies.

//currentLevel initialized to null, to be changed over time in other files.
let currentLevel = null;

function changeLevel(newLevel) {
    currentLevel = newLevel;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function degToRad(degrees) {
    let radians = degrees * 3.1415 / 180.0;

    return radians;
}

export { currentLevel, changeLevel, sleep, degToRad };