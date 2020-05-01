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

let enemySound = document.querySelector("#enemySound");
enemySound.volume = 0.1;

let startSound = document.querySelector("#gameStart");
startSound.volume = 0.1;

let damageSound = document.querySelector("#damage");
damageSound.volume = 0.1;

let cursorSelectSound = document.querySelector("#cursorSelect");
cursorSelectSound.volume = 0.1;

let winSound = document.querySelector("#winSound");
winSound.volume = 0.1;

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

function playEnemy(){
    enemySound.play();
}

function playStart(){
    startSound.play();
}

function playDamage(){
    damageSound.play();
}

function playCursorSelect(){
    cursorSelectSound.play();
}

function playWin(){{
    winSound.play();
}}


export {playSelect, playAttack, playMove, playAbsorb, playDeath, playCursor, playEnemy, playStart, playDamage, playCursorSelect, playWin};
