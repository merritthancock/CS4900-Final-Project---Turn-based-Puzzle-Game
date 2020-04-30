let selectSound = document.querySelector("#select");
selectSound.volume = 0.2;

let attackSound = document.querySelector("#slimeAttack");
attackSound.volume = 0.2;

let moveSound = document.querySelector("#slimeMove");
moveSound.volume = 0.2;

let absorbSound = document.querySelector("#slimeAbsorb");
absorbSound.volume = 0.2;

let deathSound = document.querySelector("#deathSound");
deathSound.volume = 0.2;

let cursorSound = document.querySelector("#cursorSound");
cursorSound.volume = 0.1;



function playSelect(){
    selectSound.play();
}

function playAttack(){
    attackSound.play();
}

function playMove(){
    moveSound.play();
}

function playAbsorb(){
    absorbSound.play();
}

function playDeath(){
    deathSound.play();
}

function playCursor(){
    cursorSound.play();
}

export {playSelect, playAttack, playMove, playAbsorb, playDeath, playCursor};
